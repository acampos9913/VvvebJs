(function() {
    'use strict';

    if (window.Vvveb === undefined) {
        window.Vvveb = {};
    }

    const Vvveb = window.Vvveb;
    const localStorageKey = 'vvveb_language';
    const defaultLang = 'en';

    // 1. Almacén de traducciones con namespaces
    const translations = {
        'en': {
            'builder': {
                'unsavedChanges': 'You have unsaved changes',
                'fontSize': '- Font size -',
                'enterReusableName': 'Enter name for new reusable {type}',
                'save': 'Save',
                'error': 'Error',
                'errorSaving': 'Error saving!',
                'confirmDelete': 'Are you sure you want to delete "{file}" template?',
                'delete': 'Delete',
                'errorDeletingPage': 'Error deleting page!',
                'enterNewFileName': 'Enter new file name for "{file}"',
                'rename': 'Rename',
                'errorRenamingPage': 'Error renaming page!',
                'default': 'Default'
            },
            'bootstrap4': {
                'blocksGroup': 'Bootstrap',
                'productCardBlock': 'Product Cards with Transition',
                'badgeLowKMS': 'Low KMS',
                'badgeUsed': 'Used',
                'buttonView': 'View',
                'badgeFullyLoaded': 'Fully-Loaded',
                'badgePriceReduced': 'Price Reduced',
                'userOnlineBlock': 'User online',
                'ourTeamBlock': 'Our team',
                'ourTeamHeader': 'OUR TEAM',
                'ourTeamCardText': 'This is basic card with image on top, title, description and button.',
                'loginFormBlock': 'Login form',
                'placeholderUsername': 'Username',
                'placeholderPassword': 'Password',
                'buttonSignIn': 'Sign In',
                'linkNeedAccount': 'Need an Account?',
                'linkSelectAccount': 'Select Account',
                'placeholderUserNameFull': 'User Name ...',
                'placeholderEmail': 'Emaill Address ...',
                'buttonSignUp': 'Sign Up',
                'linkHaveAccount': 'Have an Account?',
                'linkBackToLogin': 'Back to Login',
                'linkSelectAnotherAccount': 'Select another Account',
                'accountUserName1': 'User Name 1',
                'accountUserName2': 'User Name 2',
                'aboutTeamBlock': 'About and Team Section',
                'teamMemberTitle': 'Team Member',
                'teamMemberRole': 'Web Developer',
                'pricingTableBlock': 'Pricing table',
                'plan1': 'Plan 1',
                'plan2': 'Plan 2',
                'plan3': 'Plan 3',
                'featurePersonalUse': 'Personal use',
                'featureUnlimitedProjects': 'Unlimited projects',
                'featureSupport': '27/7 support',
                'buttonBuyNow': 'BUY NOW!',
                'loadingCircleBlock': 'Loading circle',
                'blockquoteBlock': 'Block quote',
                'quoteText': 'Don\'t believe anything that you read on the internet, it may be fake.',
                'subscribeNewsletterBlock': 'Subscribe newsletter',
                'joinNewsletterSpan': 'JOIN OUR NEWSLETTER',
                'subscribeNewsletterHeader': 'subscribe newsletter',
                'placeholderEmailAddress': 'enter your email address',
                'buttonSubscribe': 'subscribe',
            },
            'bootstrap5': {
                'componentsGroup': 'Bootstrap 5',
                'containerComponent': 'Container',
                'rowComponent': 'Grid Row',
                'buttonComponent': 'Button',
                'buttonLinkComponent': 'Button Link',
                'buttonGroupComponent': 'Button Group',
                'buttonToolbarComponent': 'Button Toolbar',
                'alertComponent': 'Alert',
                'cardComponent': 'Card',
                'listGroupComponent': 'List Group',
                'badgeComponent': 'Badge',
                'progressComponent': 'Progress',
                'navbarComponent': 'Navbar',
                'breadcrumbsComponent': 'Breadcrumbs',
                'paginationComponent': 'Pagination',
                'propertyType': 'Type',
                'propertyAlignment': 'Alignment',
                'propertyVerticalAlign': 'Vertical align',
                'propertySizing': 'Sizing',
                'propertyOrder': 'Order',
                'propertyWrap': 'Wrap',
                'propertyColumn': 'Column',
                'propertyNone': 'None',
                'propertyWrapOption': 'Wrap',
                'propertyNoWrapOption': 'No wrap',
                'buttonAddColumn': 'Add column',
            },
            'editor': { // <--- TRADUCCIONES DEL EDITOR.HTML
                'toggleFileManagerTitle': 'Toggle file manager',
                'toggleLeftColumnTitle': 'Toggle left column',
                'toggleRightColumnTitle': 'Toggle right column',
                'undoTitle': 'Undo (Ctrl/Cmd + Z)',
                'redoTitle': 'Redo (Ctrl/Cmd + Shift + Y)',
                'designerModeTitle': 'Designer Mode (Free dragging)',
                'previewTitle': 'Preview',
                'fullscreenTitle': 'Fullscreen (F11)',
                'toggleNavigatorTitle': 'Toggle navigator (Ctrl + Shift + N)',
                'downloadTitle': 'Download',
                'saveTitle': 'Save (Ctrl + S)',
                'saving': 'Saving ',
                'savePageButton': 'Save page',
                'viewPageTitle': 'View page',
                'mobileViewTitle': 'Mobile view',
                'tabletViewTitle': 'Tablet view',
                'desktopViewTitle': 'Desktop view',
                'pages': 'Pages',
                'newPageTitle': 'New page (Ctrl + Shift + P)',
                'expandAllTitle': 'Expand All',
                'collapseAllTitle': 'Collapse all',
                'searchSectionsPlaceholder': 'Search sections',
                'clearSearchTitle': 'Clear search',
                'sections': 'Sections',
                'pageSections': 'Page Sections',
                'searchComponentsPlaceholder': 'Search components',
                'components': 'Components',
                'blocks': 'Blocks',
                'searchBlocksPlaceholder': 'Search blocks',
                'contentTab': 'Content',
                'styleTab': 'Style',
                'advancedTab': 'Advanced',
                'noElementSelected': 'No selected element!',
                'clickToEdit': 'Click on an element to edit.',
                'stateOption': ' - State - ',
                'hoverOption': 'hover',
                'activeOption': 'active',
                'nthOfTypeOption': 'nth-of-type(2n)',
                'variablesTab': 'Variables',
                'cssTab': 'Css',
                'addElementTitle': 'Add element',
                'boldTitle': 'Bold',
                'italicTitle': 'Italic',
                'underlineTitle': 'Underline',
                'strikeoutTitle': 'Strikeout',
                'textAlignTitle': 'Text align',
                'alignLeft': 'Align Left',
                'alignCenter': 'Align Center',
                'alignRight': 'Align Right',
                'alignJustify': 'Align Justify',
                'createLinkTitle': 'Create link',
                'textColorLabel': 'Text color',
                'backgroundColorLabel': 'Background color',
                'fontSizeOption': '- Font size -',
                'fontFamilyOption': '- Font family -',
                'systemDefaultFont': 'System default',
                'dragElementTitle': 'Drag element',
                'selectParentTitle': 'Select parent',
                'moveElementUpTitle': 'Move element up',
                'moveElementDownTitle': 'Move element down',
                'editHtmlCodeTitle': 'Edit html code',
                'saveReusableTitle': 'Save as reusable',
                'cloneElementTitle': 'Clone element',
                'removeElementTitle': 'Remove element',
                'insertAfter': 'After',
                'insertInside': 'Inside',
            },
            'common': {
                // Componente Base
                'componentElement': 'Element', 
                'bootstrapVariablesComponent': 'Bootstrap Variables',
                
                // Cabeceras de Sección
                'generalHeader': 'General', 'displayHeader': 'Display', 'typographyHeader': 'Typography',
                'sizeHeader': 'Size', 'marginHeader': 'Margin', 'paddingHeader': 'Padding',
                'borderHeader': 'Border', 'borderRadiusHeader': 'Border radius', 'backgroundImageHeader': 'Background Image',
                'hideOnDeviceHeader': 'Hide based on device screen width', 
                
                // Propiedades
                'idProperty': 'Id', 'classProperty': 'Class', 'displayProperty': 'Display', 'positionProperty': 'Position',
                'topProperty': 'Top', 'leftProperty': 'Left', 'bottomProperty': 'Bottom', 'rightProperty': 'Right',
                'floatProperty': 'Float', 'opacityProperty': 'Opacity', 'backgroundColorProperty': 'Background Color',
                'textColorProperty': 'Text Color', 'fontSizeProperty': 'Font size', 'fontWeightProperty': 'Font weight', 
                'fontFamilyProperty': 'Font family', 'textAlignProperty': 'Text align', 'lineHeightProperty': 'Line height',
                'letterSpacingProperty': 'Letter spacing', 'textDecorationProperty': 'Text decoration', 'decorationColorProperty': 'Decoration Color', 
                'decorationStyleProperty': 'Decoration style', 'widthProperty': 'Width', 'heightProperty': 'Height', 
                'minWidthProperty': 'Min Width', 'minHeightProperty': 'Min Height', 'maxWidthProperty': 'Max Width', 
                'maxHeightProperty': 'Max Height', 'styleProperty': 'Style', 'colorProperty': 'Color', 
                'topLeftRadiusProperty': 'Top Left', 'topRightRadiusProperty': 'Top Right', 'bottomLeftRadiusProperty': 'Bottom Left', 
                'bottomRightRadiusProperty': 'Bottom Right', 'imageProperty': 'Image', 'repeatProperty': 'Repeat',
                'sizeProperty': 'Size', 'positionXProperty': 'Position x', 'positionYProperty': 'Position y',
                'extraSmallDevicesProperty': 'Extra small devices', 'smallDevicesProperty': 'Small devices', 
                'mediumDevicesProperty': 'Medium devices', 'largeDevicesProperty': 'Large devices', 
                'extraLargeDevicesProperty': 'Xl devices', 'extraExtraLargeDevicesProperty': 'Xxl devices',

                // Valores (Colores)
                'colorDefault': 'Default', 'colorPrimary': 'Primary', 'colorSecondary': 'Secondary', 'colorSuccess': 'Success', 
                'colorDanger': 'Danger', 'colorWarning': 'Warning', 'colorInfo': 'Info', 'colorLight': 'Light', 
                'colorDark': 'Dark', 'colorWhite': 'White',
                
                // Valores (Float)
                'floatNone': 'None', 'floatLeft': 'Left', 'floatRight': 'Right',
                
                // Valores (Display)
                'displayBlock': 'Block', 'displayInline': 'Inline', 'displayInlineBlock': 'Inline Block',
                'displayFlex': 'Flex', 'displayInlineFlex': 'Inline Flex', 'displayGrid': 'Grid',
                'displayInlineGrid': 'Inline grid', 'displayTable': 'Table', 'displayTableRow': 'Table Row',
                'displayListItem': 'List Item', 'displayInherit': 'Inherit', 'displayInitial': 'Initial', 'displayNone': 'none',
                
                // Valores (Position)
                'positionStatic': 'Static', 'positionFixed': 'Fixed', 'positionRelative': 'Relative', 'positionAbsolute': 'Absolute',
                
                // Valores (Font Weight)
                'fontWeightDefault': 'Default', 'fontWeightThin': 'Thin', 'fontWeightExtraLight': 'Extra-Light',
                'fontWeightLight': 'Light', 'fontWeightNormal': 'Normal', 'fontWeightMedium': 'Medium',
                'fontWeightSemiBold': 'Semi-Bold', 'fontWeightBold': 'Bold', 'fontWeightExtraBold': 'Extra-Bold',
                'fontWeightUltraBold': 'Ultra-Bold',
                
                // Valores (Alineación)
                'alignNone': 'None', 'alignLeft': 'Left', 'alignCenter': 'Center', 'alignRight': 'Right', 'alignJustify': 'Justify',
                
                // Valores (Decoración de texto)
                'decorationNone': 'None', 'decorationUnderline': 'underline', 'decorationOverline': 'overline',
                'decorationLineThrough': 'Line Through', 'decorationUnderlineOverline': 'Underline Overline',
                
                // Valores (Estilo, Repetición, Tamaño, Posición)
                'styleDefault': 'Default', 'styleSolid': 'Solid', 'styleWavy': 'Wavy', 'styleDotted': 'Dotted', 
                'styleDashed': 'Dashed', 'styleDouble': 'Double', 'repeatX': 'repeat-x', 'repeatY': 'repeat-y', 
                'noRepeat': 'no-repeat', 'sizeContain': 'contain', 'sizeCover': 'cover', 'positionCenter': 'center', 
                'positionRight': 'right', 'positionLeft': 'left', 'positionTop': 'top', 'positionBottom': 'bottom',
                
                // Texto de la Nota de Estilos Vinculados (Completo)
                'linkedStylesTitle': 'Linked styles',
                'linkedStylesNoticeText': 'This element shares styles with other <a class="linked-elements-hover" href="javascript:void()"><b class="elements-count">4</b> elements</a>, to apply styles <b>only for this element</b> enter a <b>unique id</b> eg: <i>marketing-heading</i> in in <br/><a class="id-input" href="#content-tab" role="tab" aria-controls="components" aria-selected="false" href="#content-tab">Content > General > Id</a>.<br/><span class="text-muted small"></span>',
            }
        },
        'es': {
            'builder': {
                'unsavedChanges': 'Tiene cambios sin guardar',
                'fontSize': '- Tamaño de fuente -',
                'enterReusableName': 'Ingrese un nombre para el nuevo {type} reutilizable',
                'save': 'Guardar',
                'error': 'Error',
                'errorSaving': '¡Error al guardar!',
                'confirmDelete': '¿Está seguro de que desea eliminar la plantilla "{file}"?',
                'delete': 'Eliminar',
                'errorDeletingPage': '¡Error al eliminar la página!',
                'enterNewFileName': 'Ingrese un nuevo nombre de archivo para "{file}"',
                'rename': 'Renombrar',
                'errorRenamingPage': '¡Error al renombrar la página!',
                'default': 'Predeterminado'
            },
            'bootstrap4': {
                'blocksGroup': 'Bootstrap',
                'productCardBlock': 'Tarjetas de Producto con Transición',
                'badgeLowKMS': 'Poco Kilometraje',
                'badgeUsed': 'Usado',
                'buttonView': 'Ver',
                'badgeFullyLoaded': 'Totalmente Equipado',
                'badgePriceReduced': 'Precio Reducido',
                'userOnlineBlock': 'Usuario en línea',
                'ourTeamBlock': 'Nuestro equipo',
                'ourTeamHeader': 'NUESTRO EQUIPO',
                'ourTeamCardText': 'Esta es una tarjeta básica con imagen, título, descripción y botón.',
                'loginFormBlock': 'Formulario de inicio de sesión',
                'placeholderUsername': 'Nombre de usuario',
                'placeholderPassword': 'Contraseña',
                'buttonSignIn': 'Iniciar Sesión',
                'linkNeedAccount': '¿Necesita una cuenta?',
                'linkSelectAccount': 'Seleccionar Cuenta',
                'placeholderUserNameFull': 'Nombre de usuario ...',
                'placeholderEmail': 'Dirección de correo electrónico ...',
                'buttonSignUp': 'Registrarse',
                'linkHaveAccount': '¿Tiene una cuenta?',
                'linkBackToLogin': 'Volver a Iniciar Sesión',
                'linkSelectAnotherAccount': 'Seleccionar otra Cuenta',
                'accountUserName1': 'Nombre de Usuario 1',
                'accountUserName2': 'Nombre de Usuario 2',
                'aboutTeamBlock': 'Sección Sobre Nosotros y Equipo',
                'teamMemberTitle': 'Miembro del Equipo',
                'teamMemberRole': 'Desarrollador Web',
                'pricingTableBlock': 'Tabla de precios',
                'plan1': 'Plan 1',
                'plan2': 'Plan 2',
                'plan3': 'Plan 3',
                'featurePersonalUse': 'Uso personal',
                'featureUnlimitedProjects': 'Proyectos ilimitados',
                'featureSupport': 'Soporte 24/7',
                'buttonBuyNow': '¡COMPRAR AHORA!',
                'loadingCircleBlock': 'Círculo de carga',
                'blockquoteBlock': 'Cita en bloque',
                'quoteText': 'No creas nada de lo que lees en internet, puede ser falso.',
                'subscribeNewsletterBlock': 'Suscribirse al boletín',
                'joinNewsletterSpan': 'ÚNASE A NUESTRO BOLETÍN',
                'subscribeNewsletterHeader': 'suscribirse al boletín',
                'placeholderEmailAddress': 'ingrese su dirección de correo electrónico',
                'buttonSubscribe': 'suscribirse',
            },
            'bootstrap5': {
                'componentsGroup': 'Bootstrap 5',
                'containerComponent': 'Contenedor',
                'rowComponent': 'Fila de Rejilla',
                'buttonComponent': 'Botón',
                'buttonLinkComponent': 'Botón Enlace',
                'buttonGroupComponent': 'Grupo de Botones',
                'buttonToolbarComponent': 'Barra de Herramientas de Botones',
                'alertComponent': 'Alerta',
                'cardComponent': 'Tarjeta (Card)',
                'listGroupComponent': 'Grupo de Lista',
                'badgeComponent': 'Etiqueta (Badge)',
                'progressComponent': 'Progreso',
                'navbarComponent': 'Barra de Navegación',
                'breadcrumbsComponent': 'Migas de Pan',
                'paginationComponent': 'Paginación',
                'propertyType': 'Tipo',
                'propertyAlignment': 'Alineación',
                'propertyVerticalAlign': 'Alineación vertical',
                'propertySizing': 'Tamaño',
                'propertyOrder': 'Orden',
                'propertyWrap': 'Ajuste',
                'propertyColumn': 'Columna',
                'propertyNone': 'Ninguno',
                'propertyWrapOption': 'Ajustar',
                'propertyNoWrapOption': 'No ajustar',
                'buttonAddColumn': 'Añadir columna',
            },
            'editor': {
                'toggleFileManagerTitle': 'Alternar gestor de archivos',
                'toggleLeftColumnTitle': 'Alternar columna izquierda',
                'toggleRightColumnTitle': 'Alternar columna derecha',
                'undoTitle': 'Deshacer (Ctrl/Cmd + Z)',
                'redoTitle': 'Rehacer (Ctrl/Cmd + Shift + Y)',
                'designerModeTitle': 'Modo Diseñador (Arrastre libre)',
                'previewTitle': 'Vista previa',
                'fullscreenTitle': 'Pantalla completa (F11)',
                'toggleNavigatorTitle': 'Alternar navegador (Ctrl + Shift + N)',
                'downloadTitle': 'Descargar',
                'saveTitle': 'Guardar (Ctrl + S)',
                'saving': 'Guardando ',
                'savePageButton': 'Guardar página',
                'viewPageTitle': 'Ver página',
                'mobileViewTitle': 'Vista móvil',
                'tabletViewTitle': 'Vista tablet',
                'desktopViewTitle': 'Vista escritorio',
                'pages': 'Páginas',
                'newPageTitle': 'Nueva página (Ctrl + Shift + P)',
                'expandAllTitle': 'Expandir todo',
                'collapseAllTitle': 'Contraer todo',
                'searchSectionsPlaceholder': 'Buscar secciones',
                'clearSearchTitle': 'Limpiar búsqueda',
                'sections': 'Secciones',
                'pageSections': 'Secciones de la página',
                'searchComponentsPlaceholder': 'Buscar componentes',
                'components': 'Componentes',
                'blocks': 'Bloques',
                'searchBlocksPlaceholder': 'Buscar bloques',
                'contentTab': 'Contenido',
                'styleTab': 'Estilo',
                'advancedTab': 'Avanzado',
                'noElementSelected': '¡Ningún elemento seleccionado!',
                'clickToEdit': 'Haga clic en un elemento para editar.',
                'stateOption': ' - Estado - ',
                'hoverOption': 'al pasar el ratón',
                'activeOption': 'activo',
                'nthOfTypeOption': 'nth-of-type(2n)',
                'variablesTab': 'Variables',
                'cssTab': 'Css',
                'addElementTitle': 'Añadir elemento',
                'boldTitle': 'Negrita',
                'italicTitle': 'Cursiva',
                'underlineTitle': 'Subrayado',
                'strikeoutTitle': 'Tachado',
                'textAlignTitle': 'Alineación de texto',
                'alignLeft': 'Alinear Izquierda',
                'alignCenter': 'Alinear Centro',
                'alignRight': 'Alinear Derecha',
                'alignJustify': 'Alinear Justificar',
                'createLinkTitle': 'Crear enlace',
                'textColorLabel': 'Color de texto',
                'backgroundColorLabel': 'Color de fondo',
                'fontSizeOption': '- Tamaño de fuente -',
                'fontFamilyOption': '- Familia de fuente -',
                'systemDefaultFont': 'Sistema predeterminado',
                'dragElementTitle': 'Arrastrar elemento',
                'selectParentTitle': 'Seleccionar padre',
                'moveElementUpTitle': 'Mover elemento arriba',
                'moveElementDownTitle': 'Mover elemento abajo',
                'editHtmlCodeTitle': 'Editar código html',
                'saveReusableTitle': 'Guardar como reutilizable',
                'cloneElementTitle': 'Clonar elemento',
                'removeElementTitle': 'Eliminar elemento',
                'insertAfter': 'Después',
                'insertInside': 'Dentro',
            },
            'common': {
                // Componente Base
                'componentElement': 'Elemento', 
                'bootstrapVariablesComponent': 'Variables de Bootstrap',
                
                // Cabeceras de Sección
                'generalHeader': 'General', 'displayHeader': 'Visualización', 'typographyHeader': 'Tipografía',
                'sizeHeader': 'Tamaño', 'marginHeader': 'Margen', 'paddingHeader': 'Relleno',
                'borderHeader': 'Borde', 'borderRadiusHeader': 'Radio de borde', 'backgroundImageHeader': 'Imagen de Fondo',
                'hideOnDeviceHeader': 'Ocultar según el ancho de pantalla', 
                
                // Propiedades
                'idProperty': 'Id', 'classProperty': 'Clase', 'displayProperty': 'Visualización', 'positionProperty': 'Posición',
                'topProperty': 'Superior', 'leftProperty': 'Izquierda', 'bottomProperty': 'Inferior', 'rightProperty': 'Derecha',
                'floatProperty': 'Flotación', 'opacityProperty': 'Opacidad', 'backgroundColorProperty': 'Color de fondo',
                'textColorProperty': 'Color de texto', 'fontSizeProperty': 'Tamaño de fuente', 'fontWeightProperty': 'Grosor de fuente', 
                'fontFamilyProperty': 'Familia de fuente', 'textAlignProperty': 'Alineación de texto', 'lineHeightProperty': 'Altura de línea',
                'letterSpacingProperty': 'Espaciado de letra', 'textDecorationProperty': 'Decoración de texto', 'decorationColorProperty': 'Color de decoración', 
                'decorationStyleProperty': 'Estilo de decoración', 'widthProperty': 'Ancho', 'heightProperty': 'Altura', 
                'minWidthProperty': 'Ancho Mínimo', 'minHeightProperty': 'Altura Mínima', 'maxWidthProperty': 'Ancho Máximo', 
                'maxHeightProperty': 'Altura Máxima', 'styleProperty': 'Estilo', 'colorProperty': 'Color', 
                'topLeftRadiusProperty': 'Superior Izquierdo', 'topRightRadiusProperty': 'Superior Derecho', 'bottomLeftRadiusProperty': 'Inferior Izquierdo', 
                'bottomRightRadiusProperty': 'Inferior Derecho', 'imageProperty': 'Imagen', 'repeatProperty': 'Repetición',
                'sizeProperty': 'Tamaño', 'positionXProperty': 'Posición x', 'positionYProperty': 'Posición y',
                'extraSmallDevicesProperty': 'Dispositivos extra pequeños', 'smallDevicesProperty': 'Dispositivos pequeños', 
                'mediumDevicesProperty': 'Dispositivos medianos', 'largeDevicesProperty': 'Dispositivos grandes', 
                'extraLargeDevicesProperty': 'Dispositivos Xl', 'extraExtraLargeDevicesProperty': 'Dispositivos Xxl',

                // Valores (Colores)
                'colorDefault': 'Predeterminado', 'colorPrimary': 'Primario', 'colorSecondary': 'Secundario', 'colorSuccess': 'Éxito', 
                'colorDanger': 'Peligro', 'colorWarning': 'Advertencia', 'colorInfo': 'Información', 'colorLight': 'Claro', 
                'colorDark': 'Oscuro', 'colorWhite': 'Blanco',
                
                // Valores (Float)
                'floatNone': 'Ninguno', 'floatLeft': 'Izquierda', 'floatRight': 'Derecha',
                
                // Valores (Display)
                'displayBlock': 'Bloque', 'displayInline': 'En línea', 'displayInlineBlock': 'Bloque en Línea',
                'displayFlex': 'Flexible', 'displayInlineFlex': 'Flexible en Línea', 'displayGrid': 'Rejilla',
                'displayInlineGrid': 'Rejilla en Línea', 'displayTable': 'Tabla', 'displayTableRow': 'Fila de Tabla',
                'displayListItem': 'Elemento de Lista', 'displayInherit': 'Heredar', 'displayInitial': 'Inicial', 'displayNone': 'ninguno',
                
                // Valores (Position)
                'positionStatic': 'Estático', 'positionFixed': 'Fijo', 'positionRelative': 'Relativo', 'positionAbsolute': 'Absoluto',
                
                // Valores (Font Weight)
                'fontWeightDefault': 'Predeterminado', 'fontWeightThin': 'Delgado', 'fontWeightExtraLight': 'Extra-Claro',
                'fontWeightLight': 'Claro', 'fontWeightNormal': 'Normal', 'fontWeightMedium': 'Medio',
                'fontWeightSemiBold': 'Semi-Negrita', 'fontWeightBold': 'Negrita', 'fontWeightExtraBold': 'Extra-Negrita',
                'fontWeightUltraBold': 'Ultra-Negrita',
                
                // Valores (Alineación)
                'alignNone': 'Ninguno', 'alignLeft': 'Izquierda', 'alignCenter': 'Centro', 'alignRight': 'Derecha', 'alignJustify': 'Justificar',
                
                // Valores (Decoración de texto)
                'decorationNone': 'Ninguno', 'decorationUnderline': 'subrayado', 'decorationOverline': 'sobrescritura',
                'decorationLineThrough': 'Tachado', 'decorationUnderlineOverline': 'Subrayado Sobrescritura',
                
                // Valores (Estilo, Repetición, Tamaño, Posición)
                'styleDefault': 'Predeterminado', 'styleSolid': 'Sólido', 'styleWavy': 'Ondulado', 'styleDotted': 'Punteado', 
                'styleDashed': 'Discontinuo', 'styleDouble': 'Doble', 'repeatX': 'repetir-x', 'repeatY': 'repetir-y', 
                'noRepeat': 'no-repetir', 'sizeContain': 'contener', 'sizeCover': 'cubrir', 'positionCenter': 'centro', 
                'positionRight': 'derecha', 'positionLeft': 'izquierda', 'positionTop': 'arriba', 'positionBottom': 'abajo',
                
                // Texto de la Nota de Estilos Vinculados (Completo)
                'linkedStylesTitle': 'Estilos vinculados',
                'linkedStylesNoticeText': 'Este elemento comparte estilos con otros <a class="linked-elements-hover" href="javascript:void()"><b class="elements-count">4</b> elementos</a>, para aplicar estilos <b>solo a este elemento</b> ingrese un <b>id único</b> ej: <i>marketing-heading</i> en <br/><a class="id-input" href="#content-tab" role="tab" aria-controls="components" aria-selected="false" href="#content-tab">Contenido > General > Id</a>.<br/><span class="text-muted small"></span>',
            }
        }
    };

    const getInitialLanguage = () => {
        const lang = document.documentElement.lang;
        sessionStorage.setItem(localStorageKey, lang);
        return lang;
    };

    Vvveb.i18n = {
        language: getInitialLanguage(),
        translations: translations,

        t: function(key, replacements = {}) {
            let lang = this.language;

            let str = key; 

            const parts = key.split('.');
            if (parts.length < 2) {
                console.warn(`Translation key "${key}" is missing a namespace (e.g., "builder.key").`);
                return str; 
            }

            const namespace = parts[0]; 
            const translationKey = parts.slice(1).join('.'); 

            // Intenta encontrar en el idioma actual
            if (this.translations[lang]?.[namespace]?.[translationKey] !== undefined) 
            {
                str = this.translations[lang][namespace][translationKey];
            }
            // Usa 'en' como respaldo
            else if (this.translations[defaultLang]?.[namespace]?.[translationKey] !== undefined) 
            {
                str = this.translations[defaultLang][namespace][translationKey];
            }

            // Realiza reemplazos (ej. {type})
            for (const placeholder in replacements) {
                str = str.replace(new RegExp('{' + placeholder + '}', 'g'), replacements[placeholder]);
            }
            return str;
        }
    };

    window.i18n = function(key, replacements = {}) {
        return Vvveb.i18n.t(key, replacements);
    };

})();
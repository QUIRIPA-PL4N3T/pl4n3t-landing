// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


import GestiónInformaciónGEI from "$lib/images/services/1.png";
import DesarrolloInventarioGEI from "$lib/images/services/2.png";
import DecarbonisationPlan from "$lib/images/services/3.png";
import NetZero from "$lib/images/services/4.png";
import CarbonNeutralitySupport from "$lib/images/services/5.png";


export const __servicesImages = [
    GestiónInformaciónGEI,
    DesarrolloInventarioGEI,
    DecarbonisationPlan,
    NetZero,
    CarbonNeutralitySupport,
]

export const __membership = {
    "id": 0,
    "name": "string",
    "membership_type": "FREE",
    "price": "20220.0",
    "duration": 2147483647,
    "description": "string",
    "benefits": "string",
    "num_brands": 2147483647,
    "num_locations": 2147483647,
    "num_users": 2147483647,
    "emission_sources": true,
    "footprint_types": "string",
    "liquidation_options": "string",
    "analysis_tools": true,
    "basic_support": true,
    "storage_capacity": "string",
    "tutorials": true,
    "webinars": true,
    "general_support": true,
    "dedicated_support": true,
    "custom_api_access": true
}

export const __featureMemberships = [
    {
        key: "benefits",
        attribute: "Creación de un perfil"
    },
    {
        key: "num_brands",
        attribute: "Número de Marcas"
    },
    {
        key: "num_locations",
        attribute: "Número de Sedes"
    },
    {
        key: "num_users",
        attribute: "Usuarios por organización"
    },
    {
        key: "emission_sources",
        attribute: "Registro de todos las Fuentes de emisión"
    },
    {
        key: "footprint_types",
        attribute: "Tipos de huella"
    },
    {
        key: "liquidation_options",
        attribute: "Liquidación: Mensual, Trimestral, Anual"
    },
    {
        key: "analysis_tools",
        attribute: "Herramientas de análisis y generación de informes personalizados"
    },
    {
        key: "basic_support",
        attribute: "Acceso al soporte básico a través de preguntas frecuentes o correo electrónico"
    },
    {
        key: "storage_capacity",
        attribute: "Mayor capacidad de almacenamiento para archivos y datos"
    },
    {
        key: "tutorials",
        attribute: "Tutoriales"
    },
    {
        key: "webinars",
        attribute: "webinars, documentación especializada, etc"
    },
    {
        key: "general_support",
        attribute: "Soporte técnico General"
    },
    {
        key: "dedicated_support",
        attribute: "Un representante de soporte asignado exclusivamente a la cuenta"
    },
    {
        key: "custom_api_access",
        attribute: "Acceso a una API personalizada para desarrollar integraciones personalizadas"
    }
]

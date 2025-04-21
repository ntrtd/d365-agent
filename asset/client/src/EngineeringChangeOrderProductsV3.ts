/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
import { EngChgEcmImpact } from './EngChgEcmImpact';
import { PmfProductType } from './PmfProductType';
import { PdsPotencyAttribRecordingEnum } from './PdsPotencyAttribRecordingEnum';
import { NoYes } from './NoYes';
import {
  EngineeringChangeOrderProductAttributes,
  EngineeringChangeOrderProductAttributesType
} from './EngineeringChangeOrderProductAttributes';
import { ProductOwners, ProductOwnersType } from './ProductOwners';
import {
  EngineeringChangeCustomerApprovalTypes,
  EngineeringChangeCustomerApprovalTypesType
} from './EngineeringChangeCustomerApprovalTypes';
import {
  EngineeringProductCategoryDetails,
  EngineeringProductCategoryDetailsType
} from './EngineeringProductCategoryDetails';
import {
  EngineeringChangeReasons,
  EngineeringChangeReasonsType
} from './EngineeringChangeReasons';
import {
  ProductLifecycleStates,
  ProductLifecycleStatesType
} from './ProductLifecycleStates';
import {
  EngineeringChangeOrderHeaders,
  EngineeringChangeOrderHeadersType
} from './EngineeringChangeOrderHeaders';
import {
  EngineeringChangeOrderProductFormulaHeaders,
  EngineeringChangeOrderProductFormulaHeadersType
} from './EngineeringChangeOrderProductFormulaHeaders';
import {
  EngineeringChangeOrderProductWhereUsedAnalyses,
  EngineeringChangeOrderProductWhereUsedAnalysesType
} from './EngineeringChangeOrderProductWhereUsedAnalyses';
import {
  EngineeringChangeOrderProductDocuments,
  EngineeringChangeOrderProductDocumentsType
} from './EngineeringChangeOrderProductDocuments';
import {
  EngineeringChangeOrderProductBillOfMaterialsHeadersV2,
  EngineeringChangeOrderProductBillOfMaterialsHeadersV2Type
} from './EngineeringChangeOrderProductBillOfMaterialsHeadersV2';
import {
  EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes,
  EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesType
} from './EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes';
import {
  EngineeringChangeOrderProductRouteHeadersV2,
  EngineeringChangeOrderProductRouteHeadersV2Type
} from './EngineeringChangeOrderProductRouteHeadersV2';

/**
 * This class represents the entity "EngineeringChangeOrderProductsV3" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductsV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductsV3Type<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductsV3.
   */
  static override _entityName = 'EngineeringChangeOrderProductsV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductsV3 entity.
   */
  static _keys = ['dataAreaId', 'EngineeringChangeOrderNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Number.
   */
  declare engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Engineering Change Impact Type.
   * @nullable
   */
  declare engineeringChangeImpactType?: EngChgEcmImpact | null;
  /**
   * New Product Size Id.
   * @nullable
   */
  declare newProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Consumption Width Conversion Factor.
   */
  declare productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Engineering Product Category Details Name.
   * @nullable
   */
  declare engineeringProductCategoryDetailsName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Current Item Number.
   * @nullable
   */
  declare currentItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Item Number.
   * @nullable
   */
  declare newItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engineering Change Customer Approval Type Name.
   * @nullable
   */
  declare engineeringChangeCustomerApprovalTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Current Product Size Id.
   * @nullable
   */
  declare currentProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Volume.
   */
  declare productVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tare Product Weight.
   */
  declare tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Current Product Color Id.
   * @nullable
   */
  declare currentProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective To Date.
   */
  declare effectiveToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shelf Advice Period Days.
   */
  declare shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Potency Base Attribute.
   * @nullable
   */
  declare potencyBaseAttribute?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Consumption Density Conversion Factor.
   */
  declare productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Current Product Style Id.
   * @nullable
   */
  declare currentProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Disposal Code.
   * @nullable
   */
  declare materialDisposalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Type.
   * @nullable
   */
  declare productionType?: PmfProductType | null;
  /**
   * Potency Base Attribute Value Entry Event.
   * @nullable
   */
  declare potencyBaseAttributeValueEntryEvent?: PdsPotencyAttribRecordingEnum | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Product Height.
   */
  declare grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Customer Approval Required.
   * @nullable
   */
  declare isCustomerApprovalRequired?: NoYes | null;
  /**
   * Engineering Change Reason Name.
   * @nullable
   */
  declare engineeringChangeReasonName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * New Product Version Id.
   * @nullable
   */
  declare newProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shelf Life Period Days.
   */
  declare shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Production Consumption Height Conversion Factor.
   */
  declare productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * New Product Configuration Id.
   * @nullable
   */
  declare newProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bom Unit Symbol.
   * @nullable
   */
  declare bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Lifecycle State Id.
   * @nullable
   */
  declare productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Environmental Health And Safety Applicable.
   * @nullable
   */
  declare isEnvironmentalHealthAndSafetyApplicable?: NoYes | null;
  /**
   * Required Special Tooling Description.
   * @nullable
   */
  declare requiredSpecialToolingDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Product Configuration Id.
   * @nullable
   */
  declare currentProductConfigurationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Owner Id.
   * @nullable
   */
  declare productOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Yield Percentage.
   */
  declare yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Change Description.
   * @nullable
   */
  declare changeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Best Before Period Days.
   */
  declare bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Gross Depth.
   */
  declare grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Effective From Date.
   */
  declare effectiveFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Current Product Version Id.
   * @nullable
   */
  declare currentProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Product Weight.
   */
  declare netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Production Consumption Depth Conversion Factor.
   */
  declare productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Gross Product Width.
   */
  declare grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * New Product Style Id.
   * @nullable
   */
  declare newProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Product Color Id.
   * @nullable
   */
  declare newProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductAttributes} entity.
   */
  declare engineeringChangeOrderProductAttributes: EngineeringChangeOrderProductAttributes<T>[];
  /**
   * One-to-one navigation property to the {@link ProductOwners} entity.
   */
  declare productOwner?: ProductOwners<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeCustomerApprovalTypes} entity.
   */
  declare engineeringChangeCustomerApprovalType?: EngineeringChangeCustomerApprovalTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringProductCategoryDetails} entity.
   */
  declare engineeringProductCategoryDetails?: EngineeringProductCategoryDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeReasons} entity.
   */
  declare engineeringChangeReason?: EngineeringChangeReasons<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductLifecycleStates} entity.
   */
  declare productLifecycleState?: ProductLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderHeaders} entity.
   */
  declare engineeringChangeOrderHeader?: EngineeringChangeOrderHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductFormulaHeaders} entity.
   */
  declare engineeringChangeOrderProductFormulaHeaders: EngineeringChangeOrderProductFormulaHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductWhereUsedAnalyses} entity.
   */
  declare engineeringChangeOrderProductWhereUsedAnalyses: EngineeringChangeOrderProductWhereUsedAnalyses<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductDocuments} entity.
   */
  declare engineeringChangeOrderProductDocuments: EngineeringChangeOrderProductDocuments<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductBillOfMaterialsHeadersV2} entity.
   */
  declare engineeringChangeOrderProductBillOfMaterialsHeadersV2: EngineeringChangeOrderProductBillOfMaterialsHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes} entity.
   */
  declare engineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes: EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteHeadersV2} entity.
   */
  declare engineeringChangeOrderProductRouteHeadersV2: EngineeringChangeOrderProductRouteHeadersV2<T>[];

  constructor(_entityApi: EngineeringChangeOrderProductsV3Api<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductsV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeImpactType?: EngChgEcmImpact | null;
  newProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  engineeringProductCategoryDetailsName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  currentItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  newItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeCustomerApprovalTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  currentProductSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  currentProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  effectiveToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  potencyBaseAttribute?: DeserializedType<T, 'Edm.String'> | null;
  productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  currentProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  materialDisposalCode?: DeserializedType<T, 'Edm.String'> | null;
  productionType?: PmfProductType | null;
  potencyBaseAttributeValueEntryEvent?: PdsPotencyAttribRecordingEnum | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  isCustomerApprovalRequired?: NoYes | null;
  engineeringChangeReasonName?: DeserializedType<T, 'Edm.String'> | null;
  newProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  newProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  isEnvironmentalHealthAndSafetyApplicable?: NoYes | null;
  requiredSpecialToolingDescription?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  currentProductConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  changeDescription?: DeserializedType<T, 'Edm.String'> | null;
  bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  effectiveFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currentProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  newProductStyleId?: DeserializedType<T, 'Edm.String'> | null;
  newProductColorId?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderProductAttributes: EngineeringChangeOrderProductAttributesType<T>[];
  productOwner?: ProductOwnersType<T> | null;
  engineeringChangeCustomerApprovalType?: EngineeringChangeCustomerApprovalTypesType<T> | null;
  engineeringProductCategoryDetails?: EngineeringProductCategoryDetailsType<T> | null;
  engineeringChangeReason?: EngineeringChangeReasonsType<T> | null;
  productLifecycleState?: ProductLifecycleStatesType<T> | null;
  engineeringChangeOrderHeader?: EngineeringChangeOrderHeadersType<T> | null;
  engineeringChangeOrderProductFormulaHeaders: EngineeringChangeOrderProductFormulaHeadersType<T>[];
  engineeringChangeOrderProductWhereUsedAnalyses: EngineeringChangeOrderProductWhereUsedAnalysesType<T>[];
  engineeringChangeOrderProductDocuments: EngineeringChangeOrderProductDocumentsType<T>[];
  engineeringChangeOrderProductBillOfMaterialsHeadersV2: EngineeringChangeOrderProductBillOfMaterialsHeadersV2Type<T>[];
  engineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes: EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesType<T>[];
  engineeringChangeOrderProductRouteHeadersV2: EngineeringChangeOrderProductRouteHeadersV2Type<T>[];
}

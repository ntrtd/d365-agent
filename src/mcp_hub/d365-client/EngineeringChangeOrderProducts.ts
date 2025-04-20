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
import type { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
import { PmfProductType } from './PmfProductType';
import { EngChgEcmImpact } from './EngChgEcmImpact';
import { NoYes } from './NoYes';
import { PdsPotencyAttribRecordingEnum } from './PdsPotencyAttribRecordingEnum';
import {
  EngineeringChangeOrderProductAttributes,
  EngineeringChangeOrderProductAttributesType
} from './EngineeringChangeOrderProductAttributes';
import {
  EngineeringChangeOrderProductFormulaHeaders,
  EngineeringChangeOrderProductFormulaHeadersType
} from './EngineeringChangeOrderProductFormulaHeaders';
import {
  EngineeringChangeOrderProductBillOfMaterialsHeaders,
  EngineeringChangeOrderProductBillOfMaterialsHeadersType
} from './EngineeringChangeOrderProductBillOfMaterialsHeaders';
import {
  EngineeringChangeOrderProductWhereUsedAnalyses,
  EngineeringChangeOrderProductWhereUsedAnalysesType
} from './EngineeringChangeOrderProductWhereUsedAnalyses';
import {
  EngineeringChangeOrderProductRouteHeaders,
  EngineeringChangeOrderProductRouteHeadersType
} from './EngineeringChangeOrderProductRouteHeaders';
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
  EngineeringChangeCustomerApprovalTypes,
  EngineeringChangeCustomerApprovalTypesType
} from './EngineeringChangeCustomerApprovalTypes';
import {
  EngineeringChangeOrderHeaders,
  EngineeringChangeOrderHeadersType
} from './EngineeringChangeOrderHeaders';
import {
  EngineeringChangeReasons,
  EngineeringChangeReasonsType
} from './EngineeringChangeReasons';
import {
  EngineeringProductCategoryDetails,
  EngineeringProductCategoryDetailsType
} from './EngineeringProductCategoryDetails';
import {
  ProductLifecycleStates,
  ProductLifecycleStatesType
} from './ProductLifecycleStates';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductOwners, ProductOwnersType } from './ProductOwners';
import {
  EngineeringChangeOrderProductRouteHeadersV2,
  EngineeringChangeOrderProductRouteHeadersV2Type
} from './EngineeringChangeOrderProductRouteHeadersV2';

/**
 * This class represents the entity "EngineeringChangeOrderProducts" of service "d365_metadata".
 */
export class EngineeringChangeOrderProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductsType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProducts.
   */
  static override _entityName = 'EngineeringChangeOrderProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProducts entity.
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
   * Required Special Tooling Description.
   * @nullable
   */
  declare requiredSpecialToolingDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Lifecycle State Id.
   * @nullable
   */
  declare productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Type.
   * @nullable
   */
  declare productionType?: PmfProductType | null;
  /**
   * Production Consumption Width Conversion Factor.
   */
  declare productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engineering Change Impact Type.
   * @nullable
   */
  declare engineeringChangeImpactType?: EngChgEcmImpact | null;
  /**
   * Is Customer Approval Required.
   * @nullable
   */
  declare isCustomerApprovalRequired?: NoYes | null;
  /**
   * Product Volume.
   */
  declare productVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Environmental Health And Safety Applicable.
   * @nullable
   */
  declare isEnvironmentalHealthAndSafetyApplicable?: NoYes | null;
  /**
   * Gross Product Height.
   */
  declare grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Owner Id.
   * @nullable
   */
  declare productOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Engineering Product Category Details Name.
   * @nullable
   */
  declare engineeringProductCategoryDetailsName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Current Product Version Id.
   * @nullable
   */
  declare currentProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Consumption Density Conversion Factor.
   */
  declare productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Potency Base Attribute Value Entry Event.
   * @nullable
   */
  declare potencyBaseAttributeValueEntryEvent?: PdsPotencyAttribRecordingEnum | null;
  /**
   * Engineering Change Customer Approval Type Name.
   * @nullable
   */
  declare engineeringChangeCustomerApprovalTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Material Disposal Code.
   * @nullable
   */
  declare materialDisposalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective From Date.
   */
  declare effectiveFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bom Unit Symbol.
   * @nullable
   */
  declare bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shelf Advice Period Days.
   */
  declare shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Engineering Change Reason Name.
   * @nullable
   */
  declare engineeringChangeReasonName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Change Description.
   * @nullable
   */
  declare changeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Consumption Height Conversion Factor.
   */
  declare productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Yield Percentage.
   */
  declare yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Effective To Date.
   */
  declare effectiveToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Gross Depth.
   */
  declare grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gross Product Width.
   */
  declare grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
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
   * Production Consumption Depth Conversion Factor.
   */
  declare productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Best Before Period Days.
   */
  declare bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Potency Base Attribute.
   * @nullable
   */
  declare potencyBaseAttribute?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Product Weight.
   */
  declare netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tare Product Weight.
   */
  declare tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductAttributes} entity.
   */
  declare engineeringChangeOrderProductAttributes: EngineeringChangeOrderProductAttributes<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductFormulaHeaders} entity.
   */
  declare engineeringChangeOrderProductFormulaHeaders: EngineeringChangeOrderProductFormulaHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductBillOfMaterialsHeaders} entity.
   */
  declare engineeringChangeOrderProductBillOfMaterialsHeaders: EngineeringChangeOrderProductBillOfMaterialsHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductWhereUsedAnalyses} entity.
   */
  declare engineeringChangeOrderProductWhereUsedAnalyses: EngineeringChangeOrderProductWhereUsedAnalyses<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteHeaders} entity.
   */
  declare engineeringChangeOrderProductRouteHeaders: EngineeringChangeOrderProductRouteHeaders<T>[];
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
   * One-to-one navigation property to the {@link EngineeringChangeCustomerApprovalTypes} entity.
   */
  declare engineeringChangeCustomerApprovalType?: EngineeringChangeCustomerApprovalTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderHeaders} entity.
   */
  declare engineeringChangeOrderHeader?: EngineeringChangeOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeReasons} entity.
   */
  declare engineeringChangeReason?: EngineeringChangeReasons<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringProductCategoryDetails} entity.
   */
  declare engineeringProductCategoryDetails?: EngineeringProductCategoryDetails<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductLifecycleStates} entity.
   */
  declare productLifecycleState?: ProductLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare currentProductVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductOwners} entity.
   */
  declare productOwner?: ProductOwners<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare newProductVersion?: ProductVersions<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductRouteHeadersV2} entity.
   */
  declare engineeringChangeOrderProductRouteHeadersV2: EngineeringChangeOrderProductRouteHeadersV2<T>[];

  constructor(_entityApi: EngineeringChangeOrderProductsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  requiredSpecialToolingDescription?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  productionType?: PmfProductType | null;
  productionConsumptionWidthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeImpactType?: EngChgEcmImpact | null;
  isCustomerApprovalRequired?: NoYes | null;
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  isEnvironmentalHealthAndSafetyApplicable?: NoYes | null;
  grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  productOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  engineeringProductCategoryDetailsName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  currentProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productionConsumptionDensityConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  potencyBaseAttributeValueEntryEvent?: PdsPotencyAttribRecordingEnum | null;
  engineeringChangeCustomerApprovalTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  materialDisposalCode?: DeserializedType<T, 'Edm.String'> | null;
  effectiveFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bomUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  engineeringChangeReasonName?: DeserializedType<T, 'Edm.String'> | null;
  changeDescription?: DeserializedType<T, 'Edm.String'> | null;
  productionConsumptionHeightConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  effectiveToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  newProductVersionId?: DeserializedType<T, 'Edm.String'> | null;
  shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  productionConsumptionDepthConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  potencyBaseAttribute?: DeserializedType<T, 'Edm.String'> | null;
  netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderProductAttributes: EngineeringChangeOrderProductAttributesType<T>[];
  engineeringChangeOrderProductFormulaHeaders: EngineeringChangeOrderProductFormulaHeadersType<T>[];
  engineeringChangeOrderProductBillOfMaterialsHeaders: EngineeringChangeOrderProductBillOfMaterialsHeadersType<T>[];
  engineeringChangeOrderProductWhereUsedAnalyses: EngineeringChangeOrderProductWhereUsedAnalysesType<T>[];
  engineeringChangeOrderProductRouteHeaders: EngineeringChangeOrderProductRouteHeadersType<T>[];
  engineeringChangeOrderProductDocuments: EngineeringChangeOrderProductDocumentsType<T>[];
  engineeringChangeOrderProductBillOfMaterialsHeadersV2: EngineeringChangeOrderProductBillOfMaterialsHeadersV2Type<T>[];
  engineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes: EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesType<T>[];
  engineeringChangeCustomerApprovalType?: EngineeringChangeCustomerApprovalTypesType<T> | null;
  engineeringChangeOrderHeader?: EngineeringChangeOrderHeadersType<T> | null;
  engineeringChangeReason?: EngineeringChangeReasonsType<T> | null;
  engineeringProductCategoryDetails?: EngineeringProductCategoryDetailsType<T> | null;
  productLifecycleState?: ProductLifecycleStatesType<T> | null;
  currentProductVersion?: ProductVersionsType<T> | null;
  productOwner?: ProductOwnersType<T> | null;
  newProductVersion?: ProductVersionsType<T> | null;
  engineeringChangeOrderProductRouteHeadersV2: EngineeringChangeOrderProductRouteHeadersV2Type<T>[];
}

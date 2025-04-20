// @ts-nocheck
import type { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  ODataService,
  EntityTypeServiceV4,
  ODataServiceOptionsInternal,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import type {
  ItemCoverageSettingsId,
  SiteGateId,
  ProductStyleV2Id,
  ProductStyleGroupLineV2Id,
  EngineeringProductCategoryDetailsId,
  ProductSizeGroupLineV2Id,
  PhysicalProductDimensionDetailsId,
  ItemCoverageSettingsV2Id,
  TransferLineFiscalInfoId,
  PackingSlipTrackingInformationId,
  KittingParametersId,
  ProductColorGroupLineV2Id,
  ProductDefaultOrderSettingsId,
  InboundShipmentOrderRequestStatusId,
  ItemBasePricePendingId,
  EngineeringChangeOrderProductRouteOperationPropertiesV2Id,
  ItemCoverageWithDerivedSettingsEntityId,
  OutboundShipmentOrderRequestStatusId,
  InboundLoadPackingStructuresId,
  WhsMobileWorkUnavailableId,
  EngineeringChangeOrderProductRouteOperationPropertiesId,
  EngineeringProductCategoryAttributeDetailsId,
  ProductColorV2Id,
  EngineeringChangeOrderProductFormulaStepConsumptionId,
  ProductSizeV2Id,
  LabelLayoutDataSourceParametersId,
  ReqItemCoverageDecouplingPointPeriodSettingsId,
  WarehouseWorkLinesId,
  ReplenishmentRuleLinesV2Id,
  MaterialHandlingParametersId,
  WhsMobileWorkLocationCompleteId,
  DeliveryModeId,
  ProdComParametersId,
  WhsMobileWorkGuidedCycleCountingId,
  InventoryAccountingKpiGoalsId,
  ShippingParametersId,
  ItemCoverageSettings,
  EditableItemCoverageSettings,
  SiteGate,
  EditableSiteGate,
  ProductStyleV2,
  EditableProductStyleV2,
  ProductStyleGroupLineV2,
  EditableProductStyleGroupLineV2,
  EngineeringProductCategoryDetails,
  EditableEngineeringProductCategoryDetails,
  ProductSizeGroupLineV2,
  EditableProductSizeGroupLineV2,
  PhysicalProductDimensionDetails,
  EditablePhysicalProductDimensionDetails,
  ItemCoverageSettingsV2,
  EditableItemCoverageSettingsV2,
  TransferLineFiscalInfo,
  EditableTransferLineFiscalInfo,
  PackingSlipTrackingInformation,
  EditablePackingSlipTrackingInformation,
  KittingParameters,
  EditableKittingParameters,
  ProductColorGroupLineV2,
  EditableProductColorGroupLineV2,
  ProductDefaultOrderSettings,
  EditableProductDefaultOrderSettings,
  InboundShipmentOrderRequestStatus,
  EditableInboundShipmentOrderRequestStatus,
  ItemBasePricePending,
  EditableItemBasePricePending,
  EngineeringChangeOrderProductRouteOperationPropertiesV2,
  EditableEngineeringChangeOrderProductRouteOperationPropertiesV2,
  ItemCoverageWithDerivedSettingsEntity,
  EditableItemCoverageWithDerivedSettingsEntity,
  OutboundShipmentOrderRequestStatus,
  EditableOutboundShipmentOrderRequestStatus,
  InboundLoadPackingStructures,
  EditableInboundLoadPackingStructures,
  WhsMobileWorkUnavailable,
  EditableWhsMobileWorkUnavailable,
  EngineeringChangeOrderProductRouteOperationProperties,
  EditableEngineeringChangeOrderProductRouteOperationProperties,
  EngineeringProductCategoryAttributeDetails,
  EditableEngineeringProductCategoryAttributeDetails,
  ProductColorV2,
  EditableProductColorV2,
  EngineeringChangeOrderProductFormulaStepConsumption,
  EditableEngineeringChangeOrderProductFormulaStepConsumption,
  ProductSizeV2,
  EditableProductSizeV2,
  LabelLayoutDataSourceParameters,
  EditableLabelLayoutDataSourceParameters,
  ReqItemCoverageDecouplingPointPeriodSettings,
  EditableReqItemCoverageDecouplingPointPeriodSettings,
  WarehouseWorkLines,
  EditableWarehouseWorkLines,
  ReplenishmentRuleLinesV2,
  EditableReplenishmentRuleLinesV2,
  MaterialHandlingParameters,
  EditableMaterialHandlingParameters,
  WhsMobileWorkLocationComplete,
  EditableWhsMobileWorkLocationComplete,
  DeliveryMode,
  EditableDeliveryMode,
  ProdComParameters,
  EditableProdComParameters,
  WhsMobileWorkGuidedCycleCounting,
  EditableWhsMobileWorkGuidedCycleCounting,
  InventoryAccountingKpiGoals,
  EditableInventoryAccountingKpiGoals,
  ShippingParameters,
  EditableShippingParameters,
} from "./MicrosoftDynamicsDataEntitiesModel";
import type {
  QItemCoverageSettings,
  QSiteGate,
  QProductStyleV2,
  QProductStyleGroupLineV2,
  QEngineeringProductCategoryDetails,
  QProductSizeGroupLineV2,
  QPhysicalProductDimensionDetails,
  QItemCoverageSettingsV2,
  QTransferLineFiscalInfo,
  QPackingSlipTrackingInformation,
  QKittingParameters,
  QProductColorGroupLineV2,
  QProductDefaultOrderSettings,
  QInboundShipmentOrderRequestStatus,
  QItemBasePricePending,
  QEngineeringChangeOrderProductRouteOperationPropertiesV2,
  QItemCoverageWithDerivedSettingsEntity,
  QOutboundShipmentOrderRequestStatus,
  QInboundLoadPackingStructures,
  QWhsMobileWorkUnavailable,
  QEngineeringChangeOrderProductRouteOperationProperties,
  QEngineeringProductCategoryAttributeDetails,
  QProductColorV2,
  QEngineeringChangeOrderProductFormulaStepConsumption,
  QProductSizeV2,
  QLabelLayoutDataSourceParameters,
  QReqItemCoverageDecouplingPointPeriodSettings,
  QWarehouseWorkLines,
  QReplenishmentRuleLinesV2,
  QMaterialHandlingParameters,
  QWhsMobileWorkLocationComplete,
  QDeliveryMode,
  QProdComParameters,
  QWhsMobileWorkGuidedCycleCounting,
  QInventoryAccountingKpiGoals,
  QShippingParameters,
} from "./QMicrosoftDynamicsDataEntities";
import {
  QItemCoverageSettingsId,
  QSiteGateId,
  QProductStyleV2Id,
  QProductStyleGroupLineV2Id,
  QEngineeringProductCategoryDetailsId,
  QProductSizeGroupLineV2Id,
  QPhysicalProductDimensionDetailsId,
  QItemCoverageSettingsV2Id,
  QTransferLineFiscalInfoId,
  QPackingSlipTrackingInformationId,
  QKittingParametersId,
  QProductColorGroupLineV2Id,
  QProductDefaultOrderSettingsId,
  QInboundShipmentOrderRequestStatusId,
  QItemBasePricePendingId,
  QEngineeringChangeOrderProductRouteOperationPropertiesV2Id,
  QItemCoverageWithDerivedSettingsEntityId,
  QOutboundShipmentOrderRequestStatusId,
  QInboundLoadPackingStructuresId,
  QWhsMobileWorkUnavailableId,
  QEngineeringChangeOrderProductRouteOperationPropertiesId,
  QEngineeringProductCategoryAttributeDetailsId,
  QProductColorV2Id,
  QEngineeringChangeOrderProductFormulaStepConsumptionId,
  QProductSizeV2Id,
  QLabelLayoutDataSourceParametersId,
  QReqItemCoverageDecouplingPointPeriodSettingsId,
  QWarehouseWorkLinesId,
  QReplenishmentRuleLinesV2Id,
  QMaterialHandlingParametersId,
  QWhsMobileWorkLocationCompleteId,
  QDeliveryModeId,
  QProdComParametersId,
  QWhsMobileWorkGuidedCycleCountingId,
  QInventoryAccountingKpiGoalsId,
  QShippingParametersId,
  qItemCoverageSettings,
  qSiteGate,
  qProductStyleV2,
  qProductStyleGroupLineV2,
  qEngineeringProductCategoryDetails,
  qProductSizeGroupLineV2,
  qPhysicalProductDimensionDetails,
  qItemCoverageSettingsV2,
  qTransferLineFiscalInfo,
  qPackingSlipTrackingInformation,
  qKittingParameters,
  qProductColorGroupLineV2,
  qProductDefaultOrderSettings,
  qInboundShipmentOrderRequestStatus,
  qItemBasePricePending,
  qEngineeringChangeOrderProductRouteOperationPropertiesV2,
  qItemCoverageWithDerivedSettingsEntity,
  qOutboundShipmentOrderRequestStatus,
  qInboundLoadPackingStructures,
  qWhsMobileWorkUnavailable,
  qEngineeringChangeOrderProductRouteOperationProperties,
  qEngineeringProductCategoryAttributeDetails,
  qProductColorV2,
  qEngineeringChangeOrderProductFormulaStepConsumption,
  qProductSizeV2,
  qLabelLayoutDataSourceParameters,
  qReqItemCoverageDecouplingPointPeriodSettings,
  qWarehouseWorkLines,
  qReplenishmentRuleLinesV2,
  qMaterialHandlingParameters,
  qWhsMobileWorkLocationComplete,
  qDeliveryMode,
  qProdComParameters,
  qWhsMobileWorkGuidedCycleCounting,
  qInventoryAccountingKpiGoals,
  qShippingParameters,
} from "./QMicrosoftDynamicsDataEntities";

export class MicrosoftDynamicsDataEntitiesService<
  in out ClientType extends ODataHttpClient,
> extends ODataService<ClientType> {
  public itemCoverageSettings(): ItemCoverageSettingsCollectionService<ClientType>;
  public itemCoverageSettings(
    id: ItemCoverageSettingsId,
  ): ItemCoverageSettingsService<ClientType>;
  public itemCoverageSettings(id?: ItemCoverageSettingsId | undefined) {
    const fieldName = "ItemCoverageSettings";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ItemCoverageSettingsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ItemCoverageSettingsService(
          client,
          path,
          new QItemCoverageSettingsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public siteGate(): SiteGateCollectionService<ClientType>;
  public siteGate(id: SiteGateId): SiteGateService<ClientType>;
  public siteGate(id?: SiteGateId | undefined) {
    const fieldName = "SiteGate";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SiteGateCollectionService(client, path, fieldName, options)
      : new SiteGateService(
          client,
          path,
          new QSiteGateId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public productStyleV2(): ProductStyleV2CollectionService<ClientType>;
  public productStyleV2(
    id: ProductStyleV2Id,
  ): ProductStyleV2Service<ClientType>;
  public productStyleV2(id?: ProductStyleV2Id | undefined) {
    const fieldName = "ProductStyleV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProductStyleV2CollectionService(client, path, fieldName, options)
      : new ProductStyleV2Service(
          client,
          path,
          new QProductStyleV2Id(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public productStyleGroupLineV2(): ProductStyleGroupLineV2CollectionService<ClientType>;
  public productStyleGroupLineV2(
    id: ProductStyleGroupLineV2Id,
  ): ProductStyleGroupLineV2Service<ClientType>;
  public productStyleGroupLineV2(id?: ProductStyleGroupLineV2Id | undefined) {
    const fieldName = "ProductStyleGroupLineV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProductStyleGroupLineV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProductStyleGroupLineV2Service(
          client,
          path,
          new QProductStyleGroupLineV2Id(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public engineeringProductCategoryDetails(): EngineeringProductCategoryDetailsCollectionService<ClientType>;
  public engineeringProductCategoryDetails(
    id: EngineeringProductCategoryDetailsId,
  ): EngineeringProductCategoryDetailsService<ClientType>;
  public engineeringProductCategoryDetails(
    id?: EngineeringProductCategoryDetailsId | undefined,
  ) {
    const fieldName = "EngineeringProductCategoryDetails";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EngineeringProductCategoryDetailsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new EngineeringProductCategoryDetailsService(
          client,
          path,
          new QEngineeringProductCategoryDetailsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public productSizeGroupLineV2(): ProductSizeGroupLineV2CollectionService<ClientType>;
  public productSizeGroupLineV2(
    id: ProductSizeGroupLineV2Id,
  ): ProductSizeGroupLineV2Service<ClientType>;
  public productSizeGroupLineV2(id?: ProductSizeGroupLineV2Id | undefined) {
    const fieldName = "ProductSizeGroupLineV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProductSizeGroupLineV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProductSizeGroupLineV2Service(
          client,
          path,
          new QProductSizeGroupLineV2Id(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public physicalProductDimensionDetails(): PhysicalProductDimensionDetailsCollectionService<ClientType>;
  public physicalProductDimensionDetails(
    id: PhysicalProductDimensionDetailsId,
  ): PhysicalProductDimensionDetailsService<ClientType>;
  public physicalProductDimensionDetails(
    id?: PhysicalProductDimensionDetailsId | undefined,
  ) {
    const fieldName = "PhysicalProductDimensionDetails";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PhysicalProductDimensionDetailsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PhysicalProductDimensionDetailsService(
          client,
          path,
          new QPhysicalProductDimensionDetailsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public itemCoverageSettingsV2(): ItemCoverageSettingsV2CollectionService<ClientType>;
  public itemCoverageSettingsV2(
    id: ItemCoverageSettingsV2Id,
  ): ItemCoverageSettingsV2Service<ClientType>;
  public itemCoverageSettingsV2(id?: ItemCoverageSettingsV2Id | undefined) {
    const fieldName = "ItemCoverageSettingsV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ItemCoverageSettingsV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ItemCoverageSettingsV2Service(
          client,
          path,
          new QItemCoverageSettingsV2Id(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public transferLineFiscalInfo(): TransferLineFiscalInfoCollectionService<ClientType>;
  public transferLineFiscalInfo(
    id: TransferLineFiscalInfoId,
  ): TransferLineFiscalInfoService<ClientType>;
  public transferLineFiscalInfo(id?: TransferLineFiscalInfoId | undefined) {
    const fieldName = "TransferLineFiscalInfo";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TransferLineFiscalInfoCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new TransferLineFiscalInfoService(
          client,
          path,
          new QTransferLineFiscalInfoId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public packingSlipTrackingInformation(): PackingSlipTrackingInformationCollectionService<ClientType>;
  public packingSlipTrackingInformation(
    id: PackingSlipTrackingInformationId,
  ): PackingSlipTrackingInformationService<ClientType>;
  public packingSlipTrackingInformation(
    id?: PackingSlipTrackingInformationId | undefined,
  ) {
    const fieldName = "PackingSlipTrackingInformation";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PackingSlipTrackingInformationCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new PackingSlipTrackingInformationService(
          client,
          path,
          new QPackingSlipTrackingInformationId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public kittingParameters(): KittingParametersCollectionService<ClientType>;
  public kittingParameters(
    id: KittingParametersId,
  ): KittingParametersService<ClientType>;
  public kittingParameters(id?: KittingParametersId | undefined) {
    const fieldName = "KittingParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new KittingParametersCollectionService(client, path, fieldName, options)
      : new KittingParametersService(
          client,
          path,
          new QKittingParametersId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public productColorGroupLineV2(): ProductColorGroupLineV2CollectionService<ClientType>;
  public productColorGroupLineV2(
    id: ProductColorGroupLineV2Id,
  ): ProductColorGroupLineV2Service<ClientType>;
  public productColorGroupLineV2(id?: ProductColorGroupLineV2Id | undefined) {
    const fieldName = "ProductColorGroupLineV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProductColorGroupLineV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProductColorGroupLineV2Service(
          client,
          path,
          new QProductColorGroupLineV2Id(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public productDefaultOrderSettings(): ProductDefaultOrderSettingsCollectionService<ClientType>;
  public productDefaultOrderSettings(
    id: ProductDefaultOrderSettingsId,
  ): ProductDefaultOrderSettingsService<ClientType>;
  public productDefaultOrderSettings(
    id?: ProductDefaultOrderSettingsId | undefined,
  ) {
    const fieldName = "ProductDefaultOrderSettings";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProductDefaultOrderSettingsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ProductDefaultOrderSettingsService(
          client,
          path,
          new QProductDefaultOrderSettingsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public inboundShipmentOrderRequestStatus(): InboundShipmentOrderRequestStatusCollectionService<ClientType>;
  public inboundShipmentOrderRequestStatus(
    id: InboundShipmentOrderRequestStatusId,
  ): InboundShipmentOrderRequestStatusService<ClientType>;
  public inboundShipmentOrderRequestStatus(
    id?: InboundShipmentOrderRequestStatusId | undefined,
  ) {
    const fieldName = "InboundShipmentOrderRequestStatus";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InboundShipmentOrderRequestStatusCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new InboundShipmentOrderRequestStatusService(
          client,
          path,
          new QInboundShipmentOrderRequestStatusId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public itemBasePricePending(): ItemBasePricePendingCollectionService<ClientType>;
  public itemBasePricePending(
    id: ItemBasePricePendingId,
  ): ItemBasePricePendingService<ClientType>;
  public itemBasePricePending(id?: ItemBasePricePendingId | undefined) {
    const fieldName = "ItemBasePricePending";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ItemBasePricePendingCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ItemBasePricePendingService(
          client,
          path,
          new QItemBasePricePendingId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public engineeringChangeOrderProductRouteOperationPropertiesV2(): EngineeringChangeOrderProductRouteOperationPropertiesV2CollectionService<ClientType>;
  public engineeringChangeOrderProductRouteOperationPropertiesV2(
    id: EngineeringChangeOrderProductRouteOperationPropertiesV2Id,
  ): EngineeringChangeOrderProductRouteOperationPropertiesV2Service<ClientType>;
  public engineeringChangeOrderProductRouteOperationPropertiesV2(
    id?: EngineeringChangeOrderProductRouteOperationPropertiesV2Id | undefined,
  ) {
    const fieldName = "EngineeringChangeOrderProductRouteOperationPropertiesV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EngineeringChangeOrderProductRouteOperationPropertiesV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new EngineeringChangeOrderProductRouteOperationPropertiesV2Service(
          client,
          path,
          new QEngineeringChangeOrderProductRouteOperationPropertiesV2Id(
            fieldName,
          ).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public itemCoverageWithDerivedSettingsEntity(): ItemCoverageWithDerivedSettingsEntityCollectionService<ClientType>;
  public itemCoverageWithDerivedSettingsEntity(
    id: ItemCoverageWithDerivedSettingsEntityId,
  ): ItemCoverageWithDerivedSettingsEntityService<ClientType>;
  public itemCoverageWithDerivedSettingsEntity(
    id?: ItemCoverageWithDerivedSettingsEntityId | undefined,
  ) {
    const fieldName = "ItemCoverageWithDerivedSettingsEntity";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ItemCoverageWithDerivedSettingsEntityCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ItemCoverageWithDerivedSettingsEntityService(
          client,
          path,
          new QItemCoverageWithDerivedSettingsEntityId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public outboundShipmentOrderRequestStatus(): OutboundShipmentOrderRequestStatusCollectionService<ClientType>;
  public outboundShipmentOrderRequestStatus(
    id: OutboundShipmentOrderRequestStatusId,
  ): OutboundShipmentOrderRequestStatusService<ClientType>;
  public outboundShipmentOrderRequestStatus(
    id?: OutboundShipmentOrderRequestStatusId | undefined,
  ) {
    const fieldName = "OutboundShipmentOrderRequestStatus";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new OutboundShipmentOrderRequestStatusCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new OutboundShipmentOrderRequestStatusService(
          client,
          path,
          new QOutboundShipmentOrderRequestStatusId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public inboundLoadPackingStructures(): InboundLoadPackingStructuresCollectionService<ClientType>;
  public inboundLoadPackingStructures(
    id: InboundLoadPackingStructuresId,
  ): InboundLoadPackingStructuresService<ClientType>;
  public inboundLoadPackingStructures(
    id?: InboundLoadPackingStructuresId | undefined,
  ) {
    const fieldName = "InboundLoadPackingStructures";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InboundLoadPackingStructuresCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new InboundLoadPackingStructuresService(
          client,
          path,
          new QInboundLoadPackingStructuresId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public whsMobileWorkUnavailable(): WhsMobileWorkUnavailableCollectionService<ClientType>;
  public whsMobileWorkUnavailable(
    id: WhsMobileWorkUnavailableId,
  ): WhsMobileWorkUnavailableService<ClientType>;
  public whsMobileWorkUnavailable(id?: WhsMobileWorkUnavailableId | undefined) {
    const fieldName = "WHSMobileWorkUnavailable";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WhsMobileWorkUnavailableCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new WhsMobileWorkUnavailableService(
          client,
          path,
          new QWhsMobileWorkUnavailableId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public engineeringChangeOrderProductRouteOperationProperties(): EngineeringChangeOrderProductRouteOperationPropertiesCollectionService<ClientType>;
  public engineeringChangeOrderProductRouteOperationProperties(
    id: EngineeringChangeOrderProductRouteOperationPropertiesId,
  ): EngineeringChangeOrderProductRouteOperationPropertiesService<ClientType>;
  public engineeringChangeOrderProductRouteOperationProperties(
    id?: EngineeringChangeOrderProductRouteOperationPropertiesId | undefined,
  ) {
    const fieldName = "EngineeringChangeOrderProductRouteOperationProperties";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EngineeringChangeOrderProductRouteOperationPropertiesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new EngineeringChangeOrderProductRouteOperationPropertiesService(
          client,
          path,
          new QEngineeringChangeOrderProductRouteOperationPropertiesId(
            fieldName,
          ).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public engineeringProductCategoryAttributeDetails(): EngineeringProductCategoryAttributeDetailsCollectionService<ClientType>;
  public engineeringProductCategoryAttributeDetails(
    id: EngineeringProductCategoryAttributeDetailsId,
  ): EngineeringProductCategoryAttributeDetailsService<ClientType>;
  public engineeringProductCategoryAttributeDetails(
    id?: EngineeringProductCategoryAttributeDetailsId | undefined,
  ) {
    const fieldName = "EngineeringProductCategoryAttributeDetails";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EngineeringProductCategoryAttributeDetailsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new EngineeringProductCategoryAttributeDetailsService(
          client,
          path,
          new QEngineeringProductCategoryAttributeDetailsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public productColorV2(): ProductColorV2CollectionService<ClientType>;
  public productColorV2(
    id: ProductColorV2Id,
  ): ProductColorV2Service<ClientType>;
  public productColorV2(id?: ProductColorV2Id | undefined) {
    const fieldName = "ProductColorV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProductColorV2CollectionService(client, path, fieldName, options)
      : new ProductColorV2Service(
          client,
          path,
          new QProductColorV2Id(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public engineeringChangeOrderProductFormulaStepConsumption(): EngineeringChangeOrderProductFormulaStepConsumptionCollectionService<ClientType>;
  public engineeringChangeOrderProductFormulaStepConsumption(
    id: EngineeringChangeOrderProductFormulaStepConsumptionId,
  ): EngineeringChangeOrderProductFormulaStepConsumptionService<ClientType>;
  public engineeringChangeOrderProductFormulaStepConsumption(
    id?: EngineeringChangeOrderProductFormulaStepConsumptionId | undefined,
  ) {
    const fieldName = "EngineeringChangeOrderProductFormulaStepConsumption";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EngineeringChangeOrderProductFormulaStepConsumptionCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new EngineeringChangeOrderProductFormulaStepConsumptionService(
          client,
          path,
          new QEngineeringChangeOrderProductFormulaStepConsumptionId(
            fieldName,
          ).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public productSizeV2(): ProductSizeV2CollectionService<ClientType>;
  public productSizeV2(id: ProductSizeV2Id): ProductSizeV2Service<ClientType>;
  public productSizeV2(id?: ProductSizeV2Id | undefined) {
    const fieldName = "ProductSizeV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProductSizeV2CollectionService(client, path, fieldName, options)
      : new ProductSizeV2Service(
          client,
          path,
          new QProductSizeV2Id(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public labelLayoutDataSourceParameters(): LabelLayoutDataSourceParametersCollectionService<ClientType>;
  public labelLayoutDataSourceParameters(
    id: LabelLayoutDataSourceParametersId,
  ): LabelLayoutDataSourceParametersService<ClientType>;
  public labelLayoutDataSourceParameters(
    id?: LabelLayoutDataSourceParametersId | undefined,
  ) {
    const fieldName = "LabelLayoutDataSourceParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LabelLayoutDataSourceParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new LabelLayoutDataSourceParametersService(
          client,
          path,
          new QLabelLayoutDataSourceParametersId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public reqItemCoverageDecouplingPointPeriodSettings(): ReqItemCoverageDecouplingPointPeriodSettingsCollectionService<ClientType>;
  public reqItemCoverageDecouplingPointPeriodSettings(
    id: ReqItemCoverageDecouplingPointPeriodSettingsId,
  ): ReqItemCoverageDecouplingPointPeriodSettingsService<ClientType>;
  public reqItemCoverageDecouplingPointPeriodSettings(
    id?: ReqItemCoverageDecouplingPointPeriodSettingsId | undefined,
  ) {
    const fieldName = "ReqItemCoverageDecouplingPointPeriodSettings";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ReqItemCoverageDecouplingPointPeriodSettingsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ReqItemCoverageDecouplingPointPeriodSettingsService(
          client,
          path,
          new QReqItemCoverageDecouplingPointPeriodSettingsId(
            fieldName,
          ).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public warehouseWorkLines(): WarehouseWorkLinesCollectionService<ClientType>;
  public warehouseWorkLines(
    id: WarehouseWorkLinesId,
  ): WarehouseWorkLinesService<ClientType>;
  public warehouseWorkLines(id?: WarehouseWorkLinesId | undefined) {
    const fieldName = "WarehouseWorkLines";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WarehouseWorkLinesCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new WarehouseWorkLinesService(
          client,
          path,
          new QWarehouseWorkLinesId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public replenishmentRuleLinesV2(): ReplenishmentRuleLinesV2CollectionService<ClientType>;
  public replenishmentRuleLinesV2(
    id: ReplenishmentRuleLinesV2Id,
  ): ReplenishmentRuleLinesV2Service<ClientType>;
  public replenishmentRuleLinesV2(id?: ReplenishmentRuleLinesV2Id | undefined) {
    const fieldName = "ReplenishmentRuleLinesV2";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ReplenishmentRuleLinesV2CollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ReplenishmentRuleLinesV2Service(
          client,
          path,
          new QReplenishmentRuleLinesV2Id(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public materialHandlingParameters(): MaterialHandlingParametersCollectionService<ClientType>;
  public materialHandlingParameters(
    id: MaterialHandlingParametersId,
  ): MaterialHandlingParametersService<ClientType>;
  public materialHandlingParameters(
    id?: MaterialHandlingParametersId | undefined,
  ) {
    const fieldName = "MaterialHandlingParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MaterialHandlingParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new MaterialHandlingParametersService(
          client,
          path,
          new QMaterialHandlingParametersId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public whsMobileWorkLocationComplete(): WhsMobileWorkLocationCompleteCollectionService<ClientType>;
  public whsMobileWorkLocationComplete(
    id: WhsMobileWorkLocationCompleteId,
  ): WhsMobileWorkLocationCompleteService<ClientType>;
  public whsMobileWorkLocationComplete(
    id?: WhsMobileWorkLocationCompleteId | undefined,
  ) {
    const fieldName = "WHSMobileWorkLocationComplete";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WhsMobileWorkLocationCompleteCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new WhsMobileWorkLocationCompleteService(
          client,
          path,
          new QWhsMobileWorkLocationCompleteId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public deliveryMode(): DeliveryModeCollectionService<ClientType>;
  public deliveryMode(id: DeliveryModeId): DeliveryModeService<ClientType>;
  public deliveryMode(id?: DeliveryModeId | undefined) {
    const fieldName = "DeliveryMode";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DeliveryModeCollectionService(client, path, fieldName, options)
      : new DeliveryModeService(
          client,
          path,
          new QDeliveryModeId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public prodComParameters(): ProdComParametersCollectionService<ClientType>;
  public prodComParameters(
    id: ProdComParametersId,
  ): ProdComParametersService<ClientType>;
  public prodComParameters(id?: ProdComParametersId | undefined) {
    const fieldName = "ProdComParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ProdComParametersCollectionService(client, path, fieldName, options)
      : new ProdComParametersService(
          client,
          path,
          new QProdComParametersId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }

  public whsMobileWorkGuidedCycleCounting(): WhsMobileWorkGuidedCycleCountingCollectionService<ClientType>;
  public whsMobileWorkGuidedCycleCounting(
    id: WhsMobileWorkGuidedCycleCountingId,
  ): WhsMobileWorkGuidedCycleCountingService<ClientType>;
  public whsMobileWorkGuidedCycleCounting(
    id?: WhsMobileWorkGuidedCycleCountingId | undefined,
  ) {
    const fieldName = "WHSMobileWorkGuidedCycleCounting";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WhsMobileWorkGuidedCycleCountingCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new WhsMobileWorkGuidedCycleCountingService(
          client,
          path,
          new QWhsMobileWorkGuidedCycleCountingId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public inventoryAccountingKpiGoals(): InventoryAccountingKpiGoalsCollectionService<ClientType>;
  public inventoryAccountingKpiGoals(
    id: InventoryAccountingKpiGoalsId,
  ): InventoryAccountingKpiGoalsService<ClientType>;
  public inventoryAccountingKpiGoals(
    id?: InventoryAccountingKpiGoalsId | undefined,
  ) {
    const fieldName = "InventoryAccountingKPIGoals";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InventoryAccountingKpiGoalsCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new InventoryAccountingKpiGoalsService(
          client,
          path,
          new QInventoryAccountingKpiGoalsId(fieldName).buildUrl(
            id,
            isUrlNotEncoded(),
          ),
          options,
        );
  }

  public shippingParameters(): ShippingParametersCollectionService<ClientType>;
  public shippingParameters(
    id: ShippingParametersId,
  ): ShippingParametersService<ClientType>;
  public shippingParameters(id?: ShippingParametersId | undefined) {
    const fieldName = "ShippingParameters";
    const { client, path, options, isUrlNotEncoded } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ShippingParametersCollectionService(
          client,
          path,
          fieldName,
          options,
        )
      : new ShippingParametersService(
          client,
          path,
          new QShippingParametersId(fieldName).buildUrl(id, isUrlNotEncoded()),
          options,
        );
  }
}

export class ItemCoverageSettingsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ItemCoverageSettings,
  EditableItemCoverageSettings,
  QItemCoverageSettings
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qItemCoverageSettings, options);
  }
}

export class ItemCoverageSettingsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ItemCoverageSettings,
  EditableItemCoverageSettings,
  QItemCoverageSettings,
  ItemCoverageSettingsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qItemCoverageSettings,
      new QItemCoverageSettingsId(name),
      options,
    );
  }
}

export class SiteGateService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  SiteGate,
  EditableSiteGate,
  QSiteGate
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qSiteGate, options);
  }
}

export class SiteGateCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  SiteGate,
  EditableSiteGate,
  QSiteGate,
  SiteGateId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qSiteGate, new QSiteGateId(name), options);
  }
}

export class ProductStyleV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProductStyleV2,
  EditableProductStyleV2,
  QProductStyleV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProductStyleV2, options);
  }
}

export class ProductStyleV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProductStyleV2,
  EditableProductStyleV2,
  QProductStyleV2,
  ProductStyleV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProductStyleV2,
      new QProductStyleV2Id(name),
      options,
    );
  }
}

export class ProductStyleGroupLineV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProductStyleGroupLineV2,
  EditableProductStyleGroupLineV2,
  QProductStyleGroupLineV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProductStyleGroupLineV2, options);
  }
}

export class ProductStyleGroupLineV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProductStyleGroupLineV2,
  EditableProductStyleGroupLineV2,
  QProductStyleGroupLineV2,
  ProductStyleGroupLineV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProductStyleGroupLineV2,
      new QProductStyleGroupLineV2Id(name),
      options,
    );
  }
}

export class EngineeringProductCategoryDetailsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  EngineeringProductCategoryDetails,
  EditableEngineeringProductCategoryDetails,
  QEngineeringProductCategoryDetails
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qEngineeringProductCategoryDetails, options);
  }
}

export class EngineeringProductCategoryDetailsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  EngineeringProductCategoryDetails,
  EditableEngineeringProductCategoryDetails,
  QEngineeringProductCategoryDetails,
  EngineeringProductCategoryDetailsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qEngineeringProductCategoryDetails,
      new QEngineeringProductCategoryDetailsId(name),
      options,
    );
  }
}

export class ProductSizeGroupLineV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProductSizeGroupLineV2,
  EditableProductSizeGroupLineV2,
  QProductSizeGroupLineV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProductSizeGroupLineV2, options);
  }
}

export class ProductSizeGroupLineV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProductSizeGroupLineV2,
  EditableProductSizeGroupLineV2,
  QProductSizeGroupLineV2,
  ProductSizeGroupLineV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProductSizeGroupLineV2,
      new QProductSizeGroupLineV2Id(name),
      options,
    );
  }
}

export class PhysicalProductDimensionDetailsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PhysicalProductDimensionDetails,
  EditablePhysicalProductDimensionDetails,
  QPhysicalProductDimensionDetails
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPhysicalProductDimensionDetails, options);
  }
}

export class PhysicalProductDimensionDetailsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PhysicalProductDimensionDetails,
  EditablePhysicalProductDimensionDetails,
  QPhysicalProductDimensionDetails,
  PhysicalProductDimensionDetailsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPhysicalProductDimensionDetails,
      new QPhysicalProductDimensionDetailsId(name),
      options,
    );
  }
}

export class ItemCoverageSettingsV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ItemCoverageSettingsV2,
  EditableItemCoverageSettingsV2,
  QItemCoverageSettingsV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qItemCoverageSettingsV2, options);
  }
}

export class ItemCoverageSettingsV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ItemCoverageSettingsV2,
  EditableItemCoverageSettingsV2,
  QItemCoverageSettingsV2,
  ItemCoverageSettingsV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qItemCoverageSettingsV2,
      new QItemCoverageSettingsV2Id(name),
      options,
    );
  }
}

export class TransferLineFiscalInfoService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  TransferLineFiscalInfo,
  EditableTransferLineFiscalInfo,
  QTransferLineFiscalInfo
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qTransferLineFiscalInfo, options);
  }
}

export class TransferLineFiscalInfoCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  TransferLineFiscalInfo,
  EditableTransferLineFiscalInfo,
  QTransferLineFiscalInfo,
  TransferLineFiscalInfoId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qTransferLineFiscalInfo,
      new QTransferLineFiscalInfoId(name),
      options,
    );
  }
}

export class PackingSlipTrackingInformationService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  PackingSlipTrackingInformation,
  EditablePackingSlipTrackingInformation,
  QPackingSlipTrackingInformation
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qPackingSlipTrackingInformation, options);
  }
}

export class PackingSlipTrackingInformationCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  PackingSlipTrackingInformation,
  EditablePackingSlipTrackingInformation,
  QPackingSlipTrackingInformation,
  PackingSlipTrackingInformationId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qPackingSlipTrackingInformation,
      new QPackingSlipTrackingInformationId(name),
      options,
    );
  }
}

export class KittingParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  KittingParameters,
  EditableKittingParameters,
  QKittingParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qKittingParameters, options);
  }
}

export class KittingParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  KittingParameters,
  EditableKittingParameters,
  QKittingParameters,
  KittingParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qKittingParameters,
      new QKittingParametersId(name),
      options,
    );
  }
}

export class ProductColorGroupLineV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProductColorGroupLineV2,
  EditableProductColorGroupLineV2,
  QProductColorGroupLineV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProductColorGroupLineV2, options);
  }
}

export class ProductColorGroupLineV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProductColorGroupLineV2,
  EditableProductColorGroupLineV2,
  QProductColorGroupLineV2,
  ProductColorGroupLineV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProductColorGroupLineV2,
      new QProductColorGroupLineV2Id(name),
      options,
    );
  }
}

export class ProductDefaultOrderSettingsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProductDefaultOrderSettings,
  EditableProductDefaultOrderSettings,
  QProductDefaultOrderSettings
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProductDefaultOrderSettings, options);
  }
}

export class ProductDefaultOrderSettingsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProductDefaultOrderSettings,
  EditableProductDefaultOrderSettings,
  QProductDefaultOrderSettings,
  ProductDefaultOrderSettingsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProductDefaultOrderSettings,
      new QProductDefaultOrderSettingsId(name),
      options,
    );
  }
}

export class InboundShipmentOrderRequestStatusService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  InboundShipmentOrderRequestStatus,
  EditableInboundShipmentOrderRequestStatus,
  QInboundShipmentOrderRequestStatus
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qInboundShipmentOrderRequestStatus, options);
  }
}

export class InboundShipmentOrderRequestStatusCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  InboundShipmentOrderRequestStatus,
  EditableInboundShipmentOrderRequestStatus,
  QInboundShipmentOrderRequestStatus,
  InboundShipmentOrderRequestStatusId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qInboundShipmentOrderRequestStatus,
      new QInboundShipmentOrderRequestStatusId(name),
      options,
    );
  }
}

export class ItemBasePricePendingService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ItemBasePricePending,
  EditableItemBasePricePending,
  QItemBasePricePending
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qItemBasePricePending, options);
  }
}

export class ItemBasePricePendingCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ItemBasePricePending,
  EditableItemBasePricePending,
  QItemBasePricePending,
  ItemBasePricePendingId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qItemBasePricePending,
      new QItemBasePricePendingId(name),
      options,
    );
  }
}

export class EngineeringChangeOrderProductRouteOperationPropertiesV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  EngineeringChangeOrderProductRouteOperationPropertiesV2,
  EditableEngineeringChangeOrderProductRouteOperationPropertiesV2,
  QEngineeringChangeOrderProductRouteOperationPropertiesV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qEngineeringChangeOrderProductRouteOperationPropertiesV2,
      options,
    );
  }
}

export class EngineeringChangeOrderProductRouteOperationPropertiesV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  EngineeringChangeOrderProductRouteOperationPropertiesV2,
  EditableEngineeringChangeOrderProductRouteOperationPropertiesV2,
  QEngineeringChangeOrderProductRouteOperationPropertiesV2,
  EngineeringChangeOrderProductRouteOperationPropertiesV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qEngineeringChangeOrderProductRouteOperationPropertiesV2,
      new QEngineeringChangeOrderProductRouteOperationPropertiesV2Id(name),
      options,
    );
  }
}

export class ItemCoverageWithDerivedSettingsEntityService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ItemCoverageWithDerivedSettingsEntity,
  EditableItemCoverageWithDerivedSettingsEntity,
  QItemCoverageWithDerivedSettingsEntity
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qItemCoverageWithDerivedSettingsEntity,
      options,
    );
  }
}

export class ItemCoverageWithDerivedSettingsEntityCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ItemCoverageWithDerivedSettingsEntity,
  EditableItemCoverageWithDerivedSettingsEntity,
  QItemCoverageWithDerivedSettingsEntity,
  ItemCoverageWithDerivedSettingsEntityId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qItemCoverageWithDerivedSettingsEntity,
      new QItemCoverageWithDerivedSettingsEntityId(name),
      options,
    );
  }
}

export class OutboundShipmentOrderRequestStatusService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  OutboundShipmentOrderRequestStatus,
  EditableOutboundShipmentOrderRequestStatus,
  QOutboundShipmentOrderRequestStatus
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qOutboundShipmentOrderRequestStatus, options);
  }
}

export class OutboundShipmentOrderRequestStatusCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  OutboundShipmentOrderRequestStatus,
  EditableOutboundShipmentOrderRequestStatus,
  QOutboundShipmentOrderRequestStatus,
  OutboundShipmentOrderRequestStatusId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qOutboundShipmentOrderRequestStatus,
      new QOutboundShipmentOrderRequestStatusId(name),
      options,
    );
  }
}

export class InboundLoadPackingStructuresService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  InboundLoadPackingStructures,
  EditableInboundLoadPackingStructures,
  QInboundLoadPackingStructures
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qInboundLoadPackingStructures, options);
  }
}

export class InboundLoadPackingStructuresCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  InboundLoadPackingStructures,
  EditableInboundLoadPackingStructures,
  QInboundLoadPackingStructures,
  InboundLoadPackingStructuresId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qInboundLoadPackingStructures,
      new QInboundLoadPackingStructuresId(name),
      options,
    );
  }
}

export class WhsMobileWorkUnavailableService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  WhsMobileWorkUnavailable,
  EditableWhsMobileWorkUnavailable,
  QWhsMobileWorkUnavailable
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qWhsMobileWorkUnavailable, options);
  }
}

export class WhsMobileWorkUnavailableCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  WhsMobileWorkUnavailable,
  EditableWhsMobileWorkUnavailable,
  QWhsMobileWorkUnavailable,
  WhsMobileWorkUnavailableId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qWhsMobileWorkUnavailable,
      new QWhsMobileWorkUnavailableId(name),
      options,
    );
  }
}

export class EngineeringChangeOrderProductRouteOperationPropertiesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  EngineeringChangeOrderProductRouteOperationProperties,
  EditableEngineeringChangeOrderProductRouteOperationProperties,
  QEngineeringChangeOrderProductRouteOperationProperties
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qEngineeringChangeOrderProductRouteOperationProperties,
      options,
    );
  }
}

export class EngineeringChangeOrderProductRouteOperationPropertiesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  EngineeringChangeOrderProductRouteOperationProperties,
  EditableEngineeringChangeOrderProductRouteOperationProperties,
  QEngineeringChangeOrderProductRouteOperationProperties,
  EngineeringChangeOrderProductRouteOperationPropertiesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qEngineeringChangeOrderProductRouteOperationProperties,
      new QEngineeringChangeOrderProductRouteOperationPropertiesId(name),
      options,
    );
  }
}

export class EngineeringProductCategoryAttributeDetailsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  EngineeringProductCategoryAttributeDetails,
  EditableEngineeringProductCategoryAttributeDetails,
  QEngineeringProductCategoryAttributeDetails
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qEngineeringProductCategoryAttributeDetails,
      options,
    );
  }
}

export class EngineeringProductCategoryAttributeDetailsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  EngineeringProductCategoryAttributeDetails,
  EditableEngineeringProductCategoryAttributeDetails,
  QEngineeringProductCategoryAttributeDetails,
  EngineeringProductCategoryAttributeDetailsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qEngineeringProductCategoryAttributeDetails,
      new QEngineeringProductCategoryAttributeDetailsId(name),
      options,
    );
  }
}

export class ProductColorV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProductColorV2,
  EditableProductColorV2,
  QProductColorV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProductColorV2, options);
  }
}

export class ProductColorV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProductColorV2,
  EditableProductColorV2,
  QProductColorV2,
  ProductColorV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProductColorV2,
      new QProductColorV2Id(name),
      options,
    );
  }
}

export class EngineeringChangeOrderProductFormulaStepConsumptionService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  EngineeringChangeOrderProductFormulaStepConsumption,
  EditableEngineeringChangeOrderProductFormulaStepConsumption,
  QEngineeringChangeOrderProductFormulaStepConsumption
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qEngineeringChangeOrderProductFormulaStepConsumption,
      options,
    );
  }
}

export class EngineeringChangeOrderProductFormulaStepConsumptionCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  EngineeringChangeOrderProductFormulaStepConsumption,
  EditableEngineeringChangeOrderProductFormulaStepConsumption,
  QEngineeringChangeOrderProductFormulaStepConsumption,
  EngineeringChangeOrderProductFormulaStepConsumptionId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qEngineeringChangeOrderProductFormulaStepConsumption,
      new QEngineeringChangeOrderProductFormulaStepConsumptionId(name),
      options,
    );
  }
}

export class ProductSizeV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProductSizeV2,
  EditableProductSizeV2,
  QProductSizeV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProductSizeV2, options);
  }
}

export class ProductSizeV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProductSizeV2,
  EditableProductSizeV2,
  QProductSizeV2,
  ProductSizeV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProductSizeV2,
      new QProductSizeV2Id(name),
      options,
    );
  }
}

export class LabelLayoutDataSourceParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  LabelLayoutDataSourceParameters,
  EditableLabelLayoutDataSourceParameters,
  QLabelLayoutDataSourceParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qLabelLayoutDataSourceParameters, options);
  }
}

export class LabelLayoutDataSourceParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  LabelLayoutDataSourceParameters,
  EditableLabelLayoutDataSourceParameters,
  QLabelLayoutDataSourceParameters,
  LabelLayoutDataSourceParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qLabelLayoutDataSourceParameters,
      new QLabelLayoutDataSourceParametersId(name),
      options,
    );
  }
}

export class ReqItemCoverageDecouplingPointPeriodSettingsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ReqItemCoverageDecouplingPointPeriodSettings,
  EditableReqItemCoverageDecouplingPointPeriodSettings,
  QReqItemCoverageDecouplingPointPeriodSettings
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qReqItemCoverageDecouplingPointPeriodSettings,
      options,
    );
  }
}

export class ReqItemCoverageDecouplingPointPeriodSettingsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ReqItemCoverageDecouplingPointPeriodSettings,
  EditableReqItemCoverageDecouplingPointPeriodSettings,
  QReqItemCoverageDecouplingPointPeriodSettings,
  ReqItemCoverageDecouplingPointPeriodSettingsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qReqItemCoverageDecouplingPointPeriodSettings,
      new QReqItemCoverageDecouplingPointPeriodSettingsId(name),
      options,
    );
  }
}

export class WarehouseWorkLinesService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  WarehouseWorkLines,
  EditableWarehouseWorkLines,
  QWarehouseWorkLines
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qWarehouseWorkLines, options);
  }
}

export class WarehouseWorkLinesCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  WarehouseWorkLines,
  EditableWarehouseWorkLines,
  QWarehouseWorkLines,
  WarehouseWorkLinesId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qWarehouseWorkLines,
      new QWarehouseWorkLinesId(name),
      options,
    );
  }
}

export class ReplenishmentRuleLinesV2Service<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ReplenishmentRuleLinesV2,
  EditableReplenishmentRuleLinesV2,
  QReplenishmentRuleLinesV2
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qReplenishmentRuleLinesV2, options);
  }
}

export class ReplenishmentRuleLinesV2CollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ReplenishmentRuleLinesV2,
  EditableReplenishmentRuleLinesV2,
  QReplenishmentRuleLinesV2,
  ReplenishmentRuleLinesV2Id
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qReplenishmentRuleLinesV2,
      new QReplenishmentRuleLinesV2Id(name),
      options,
    );
  }
}

export class MaterialHandlingParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  MaterialHandlingParameters,
  EditableMaterialHandlingParameters,
  QMaterialHandlingParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qMaterialHandlingParameters, options);
  }
}

export class MaterialHandlingParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  MaterialHandlingParameters,
  EditableMaterialHandlingParameters,
  QMaterialHandlingParameters,
  MaterialHandlingParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qMaterialHandlingParameters,
      new QMaterialHandlingParametersId(name),
      options,
    );
  }
}

export class WhsMobileWorkLocationCompleteService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  WhsMobileWorkLocationComplete,
  EditableWhsMobileWorkLocationComplete,
  QWhsMobileWorkLocationComplete
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qWhsMobileWorkLocationComplete, options);
  }
}

export class WhsMobileWorkLocationCompleteCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  WhsMobileWorkLocationComplete,
  EditableWhsMobileWorkLocationComplete,
  QWhsMobileWorkLocationComplete,
  WhsMobileWorkLocationCompleteId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qWhsMobileWorkLocationComplete,
      new QWhsMobileWorkLocationCompleteId(name),
      options,
    );
  }
}

export class DeliveryModeService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  DeliveryMode,
  EditableDeliveryMode,
  QDeliveryMode
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qDeliveryMode, options);
  }
}

export class DeliveryModeCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  DeliveryMode,
  EditableDeliveryMode,
  QDeliveryMode,
  DeliveryModeId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qDeliveryMode,
      new QDeliveryModeId(name),
      options,
    );
  }
}

export class ProdComParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ProdComParameters,
  EditableProdComParameters,
  QProdComParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qProdComParameters, options);
  }
}

export class ProdComParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ProdComParameters,
  EditableProdComParameters,
  QProdComParameters,
  ProdComParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qProdComParameters,
      new QProdComParametersId(name),
      options,
    );
  }
}

export class WhsMobileWorkGuidedCycleCountingService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  WhsMobileWorkGuidedCycleCounting,
  EditableWhsMobileWorkGuidedCycleCounting,
  QWhsMobileWorkGuidedCycleCounting
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qWhsMobileWorkGuidedCycleCounting, options);
  }
}

export class WhsMobileWorkGuidedCycleCountingCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  WhsMobileWorkGuidedCycleCounting,
  EditableWhsMobileWorkGuidedCycleCounting,
  QWhsMobileWorkGuidedCycleCounting,
  WhsMobileWorkGuidedCycleCountingId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qWhsMobileWorkGuidedCycleCounting,
      new QWhsMobileWorkGuidedCycleCountingId(name),
      options,
    );
  }
}

export class InventoryAccountingKpiGoalsService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  InventoryAccountingKpiGoals,
  EditableInventoryAccountingKpiGoals,
  QInventoryAccountingKpiGoals
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qInventoryAccountingKpiGoals, options);
  }
}

export class InventoryAccountingKpiGoalsCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  InventoryAccountingKpiGoals,
  EditableInventoryAccountingKpiGoals,
  QInventoryAccountingKpiGoals,
  InventoryAccountingKpiGoalsId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qInventoryAccountingKpiGoals,
      new QInventoryAccountingKpiGoalsId(name),
      options,
    );
  }
}

export class ShippingParametersService<
  in out ClientType extends ODataHttpClient,
> extends EntityTypeServiceV4<
  ClientType,
  ShippingParameters,
  EditableShippingParameters,
  QShippingParameters
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(client, basePath, name, qShippingParameters, options);
  }
}

export class ShippingParametersCollectionService<
  in out ClientType extends ODataHttpClient,
> extends EntitySetServiceV4<
  ClientType,
  ShippingParameters,
  EditableShippingParameters,
  QShippingParameters,
  ShippingParametersId
> {
  constructor(
    client: ClientType,
    basePath: string,
    name: string,
    options?: ODataServiceOptionsInternal,
  ) {
    super(
      client,
      basePath,
      name,
      qShippingParameters,
      new QShippingParametersId(name),
      options,
    );
  }
}

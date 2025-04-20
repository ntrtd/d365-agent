/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostContainersTables } from './LandedCostContainersTables';
import { LandedCostContainersTablesRequestBuilder } from './LandedCostContainersTablesRequestBuilder';
import { ItmMeasurementUnit } from './ItmMeasurementUnit';
import { PurchStatus } from './PurchStatus';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LandedCostContainersTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LandedCostContainersTables<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): LandedCostContainersTablesApi<DeSerializersT> {
    return new LandedCostContainersTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LandedCostContainersTables;

  requestBuilder(): LandedCostContainersTablesRequestBuilder<DeSerializersT> {
    return new LandedCostContainersTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LandedCostContainersTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LandedCostContainersTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LandedCostContainersTables<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof LandedCostContainersTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LandedCostContainersTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_ID: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONTAINER_ID: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_EC_APPLIED_DATE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_REMARKS: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_THEIR_SEAL_NUM: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_EST_DLV_DATE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITM_DEPARTURE_DATE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_FROM_PORT: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_MEASUREMENT: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITM_LOCAL_TRANSPORT_TIME: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHIP_EC_NUM: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_GOODS_RELEASED: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_CUSTOMER_APPOINTMENT: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_EC_EXPIRY_DATE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_ORIGINAL_DOCS_RECEIVED: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_TO_PORT: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_EST_PORT_DATE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_CONTAINER_UNIT_TYPE_ID: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_MEASUREMENT_UNIT: EnumField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      ItmMeasurementUnit,
      true,
      true
    >;
    ORIG_SHIP_ID: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_NO_OF_CARTONS: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_JOURNEY_ID: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_PURCH_STATUS: EnumField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    SHIP_EC_RECEIVED_DATE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITM_LOCAL_TRANSPORT_DATE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_HAWB: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CONTAINER_TYPE_ID: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_OUR_SEAL_NUM: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_DELIVERY_INSTRUCTIONS: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_DEL_AT_WAREHOUSE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_EXPECTED_LOADING_DATE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_BROKER_ADVISED: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_VERIFICATION_DATE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_DATE: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_PENDING_USED: EnumField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_CONVERTED_TO_RENTAL: EnumField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_GOODS_DESC: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_RETURNABLE: EnumField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_STATUS_ID: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_LOCAL_FORWARDER: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_GPS_UNIT: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_ORIGINAL_BOL_SEBT: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_VESSEL_ID: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_REFRIGERATION_TYPE_ID: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_ACTUAL_WEIGHT: OrderableEdmTypeField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIP_RENTAL: EnumField<
      LandedCostContainersTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LandedCostContainersTables<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ID: fieldBuilder.buildEdmTypeField('ShipId', 'Edm.String', false),
        /**
         * Static representation of the {@link shipContainerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONTAINER_ID: fieldBuilder.buildEdmTypeField(
          'ShipContainerId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link shipEcAppliedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EC_APPLIED_DATE: fieldBuilder.buildEdmTypeField(
          'ShipECAppliedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_REMARKS: fieldBuilder.buildEdmTypeField(
          'ShipRemarks',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipTheirSealNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_THEIR_SEAL_NUM: fieldBuilder.buildEdmTypeField(
          'ShipTheirSealNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipEstDlvDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EST_DLV_DATE: fieldBuilder.buildEdmTypeField(
          'ShipEstDlvDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itmDepartureDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_DEPARTURE_DATE: fieldBuilder.buildEdmTypeField(
          'ITMDepartureDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipFromPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_FROM_PORT: fieldBuilder.buildEdmTypeField(
          'ShipFromPort',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_MEASUREMENT: fieldBuilder.buildEdmTypeField(
          'ShipMeasurement',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link itmLocalTransportTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_LOCAL_TRANSPORT_TIME: fieldBuilder.buildEdmTypeField(
          'ITMLocalTransportTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link shipEcNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EC_NUM: fieldBuilder.buildEdmTypeField(
          'ShipECNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipGoodsReleased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_GOODS_RELEASED: fieldBuilder.buildEdmTypeField(
          'ShipGoodsReleased',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipCustomerAppointment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CUSTOMER_APPOINTMENT: fieldBuilder.buildEdmTypeField(
          'ShipCustomerAppointment',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipEcExpiryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EC_EXPIRY_DATE: fieldBuilder.buildEdmTypeField(
          'ShipECExpiryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipOriginalDocsReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ORIGINAL_DOCS_RECEIVED: fieldBuilder.buildEdmTypeField(
          'ShipOriginalDocsReceived',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipToPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TO_PORT: fieldBuilder.buildEdmTypeField(
          'ShipToPort',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipEstPortDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EST_PORT_DATE: fieldBuilder.buildEdmTypeField(
          'ShipEstPortDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipContainerUnitTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONTAINER_UNIT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ShipContainerUnitTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipMeasurementUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_MEASUREMENT_UNIT: fieldBuilder.buildEnumField(
          'ShipMeasurementUnit',
          ItmMeasurementUnit,
          true
        ),
        /**
         * Static representation of the {@link origShipId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_SHIP_ID: fieldBuilder.buildEdmTypeField(
          'OrigShipId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipNoOfCartons} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_NO_OF_CARTONS: fieldBuilder.buildEdmTypeField(
          'ShipNoOfCartons',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipJourneyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_JOURNEY_ID: fieldBuilder.buildEdmTypeField(
          'ShipJourneyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipPurchStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_PURCH_STATUS: fieldBuilder.buildEnumField(
          'ShipPurchStatus',
          PurchStatus,
          true
        ),
        /**
         * Static representation of the {@link shipEcReceivedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EC_RECEIVED_DATE: fieldBuilder.buildEdmTypeField(
          'ShipECReceivedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itmLocalTransportDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_LOCAL_TRANSPORT_DATE: fieldBuilder.buildEdmTypeField(
          'ITMLocalTransportDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipHawb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_HAWB: fieldBuilder.buildEdmTypeField(
          'ShipHAWB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipContainerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONTAINER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ShipContainerTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipOurSealNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_OUR_SEAL_NUM: fieldBuilder.buildEdmTypeField(
          'ShipOurSealNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipDeliveryInstructions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DELIVERY_INSTRUCTIONS: fieldBuilder.buildEdmTypeField(
          'ShipDeliveryInstructions',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipDelAtWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DEL_AT_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'ShipDelAtWarehouse',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipExpectedLoadingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_EXPECTED_LOADING_DATE: fieldBuilder.buildEdmTypeField(
          'ShipExpectedLoadingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipBrokerAdvised} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_BROKER_ADVISED: fieldBuilder.buildEdmTypeField(
          'ShipBrokerAdvised',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipVerificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_VERIFICATION_DATE: fieldBuilder.buildEdmTypeField(
          'ShipVerificationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DATE: fieldBuilder.buildEdmTypeField(
          'ShipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipPendingUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_PENDING_USED: fieldBuilder.buildEnumField(
          'ShipPendingUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipConvertedToRental} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONVERTED_TO_RENTAL: fieldBuilder.buildEnumField(
          'ShipConvertedToRental',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipGoodsDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_GOODS_DESC: fieldBuilder.buildEdmTypeField(
          'ShipGoodsDesc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipReturnable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_RETURNABLE: fieldBuilder.buildEnumField(
          'ShipReturnable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ShipStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipLocalForwarder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_LOCAL_FORWARDER: fieldBuilder.buildEdmTypeField(
          'ShipLocalForwarder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipGpsUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_GPS_UNIT: fieldBuilder.buildEdmTypeField(
          'ShipGPSUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipOriginalBolSebt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ORIGINAL_BOL_SEBT: fieldBuilder.buildEdmTypeField(
          'ShipOriginalBOLSebt',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shipVesselId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_VESSEL_ID: fieldBuilder.buildEdmTypeField(
          'ShipVesselId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipRefrigerationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_REFRIGERATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ShipRefrigerationTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipActualWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ACTUAL_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ShipActualWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shipRental} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_RENTAL: fieldBuilder.buildEnumField('ShipRental', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LandedCostContainersTables)
      };
    }

    return this._schema;
  }
}

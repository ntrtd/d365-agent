/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LandedCostVoyageTables } from './LandedCostVoyageTables';
import { LandedCostVoyageTablesRequestBuilder } from './LandedCostVoyageTablesRequestBuilder';
import { PurchStatus } from './PurchStatus';
import { ItmMeasurementUnit } from './ItmMeasurementUnit';
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
export class LandedCostVoyageTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LandedCostVoyageTables<DeSerializersT>, DeSerializersT>
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
  ): LandedCostVoyageTablesApi<DeSerializersT> {
    return new LandedCostVoyageTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LandedCostVoyageTables;

  requestBuilder(): LandedCostVoyageTablesRequestBuilder<DeSerializersT> {
    return new LandedCostVoyageTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LandedCostVoyageTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LandedCostVoyageTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LandedCostVoyageTables<DeSerializersT>,
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
    typeof LandedCostVoyageTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LandedCostVoyageTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_ID: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_REMARKS: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_EST_DLV_DATE: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITM_ORIGINAL_DOCS_RECEIVED: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITM_DEPARTURE_DATE: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_FROM_PORT: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_NO_OF_PALLETS: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHIP_MEASUREMENT: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITM_LOCAL_TRANSPORT_TIME: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DLV_MODE_ID: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITM_PURCH_STATUS: EnumField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      PurchStatus,
      true,
      true
    >;
    ITM_CUSTOMER_APPOINTMENT: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITM_GOODS_RELEASED: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITM_DELIVERY_INSTRUCTIONS: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITM_BROKER_ADVISED: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_TO_PORT: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_VALUATION_DATE: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_EST_PORT_DATE: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITM_VERIFICATION_DATE: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_MEASUREMENT_UNIT: EnumField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      ItmMeasurementUnit,
      true,
      true
    >;
    SHIP_DOC_RECEIVED: EnumField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_JOURNEY_ID: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITM_ORIGINAL_BOL_SEBT: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITM_LOCAL_TRANSPORT_DATE: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_MAWB: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_VEND_ACCOUNT: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_VOYAGE: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_CUSTOMS_ENTRY_ID: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITM_DEL_AT_WAREHOUSE: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_HAWB: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_PENDING: EnumField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_TALLY_IN_NUMBER: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_DATE: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIP_STATUS_ID: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_LOCAL_FORWARDER: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_DESCRIPTION: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_VESSEL_ID: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_RENTAL: EnumField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_ID_EXTERNAL: OrderableEdmTypeField<
      LandedCostVoyageTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LandedCostVoyageTables<DeSerializers>>;
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
         * Static representation of the {@link shipRemarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_REMARKS: fieldBuilder.buildEdmTypeField(
          'ShipRemarks',
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
         * Static representation of the {@link itmOriginalDocsReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_ORIGINAL_DOCS_RECEIVED: fieldBuilder.buildEdmTypeField(
          'ITMOriginalDocsReceived',
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
         * Static representation of the {@link shipNoOfPallets} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_NO_OF_PALLETS: fieldBuilder.buildEdmTypeField(
          'ShipNoOfPallets',
          'Edm.Int32',
          false
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
         * Static representation of the {@link dlvModeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DLV_MODE_ID: fieldBuilder.buildEdmTypeField(
          'DlvModeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itmPurchStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_PURCH_STATUS: fieldBuilder.buildEnumField(
          'ITMPurchStatus',
          PurchStatus,
          true
        ),
        /**
         * Static representation of the {@link itmCustomerAppointment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_CUSTOMER_APPOINTMENT: fieldBuilder.buildEdmTypeField(
          'ITMCustomerAppointment',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itmGoodsReleased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_GOODS_RELEASED: fieldBuilder.buildEdmTypeField(
          'ITMGoodsReleased',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itmDeliveryInstructions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_DELIVERY_INSTRUCTIONS: fieldBuilder.buildEdmTypeField(
          'ITMDeliveryInstructions',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itmBrokerAdvised} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_BROKER_ADVISED: fieldBuilder.buildEdmTypeField(
          'ITMBrokerAdvised',
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
         * Static representation of the {@link shipValuationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_VALUATION_DATE: fieldBuilder.buildEdmTypeField(
          'ShipValuationDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link itmVerificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_VERIFICATION_DATE: fieldBuilder.buildEdmTypeField(
          'ITMVerificationDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link shipDocReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DOC_RECEIVED: fieldBuilder.buildEnumField(
          'ShipDocReceived',
          NoYes,
          true
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
         * Static representation of the {@link itmOriginalBolSebt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_ORIGINAL_BOL_SEBT: fieldBuilder.buildEdmTypeField(
          'ITMOriginalBOLSebt',
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
         * Static representation of the {@link shipMawb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_MAWB: fieldBuilder.buildEdmTypeField(
          'ShipMAWB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipVendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ShipVendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipVoyage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_VOYAGE: fieldBuilder.buildEdmTypeField(
          'ShipVoyage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipCustomsEntryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CUSTOMS_ENTRY_ID: fieldBuilder.buildEdmTypeField(
          'ShipCustomsEntryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itmDelAtWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITM_DEL_AT_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'ITMDelAtWarehouse',
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
         * Static representation of the {@link shipPending} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_PENDING: fieldBuilder.buildEnumField('ShipPending', NoYes, true),
        /**
         * Static representation of the {@link shipTallyInNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TALLY_IN_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShipTallyInNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link shipDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ShipDescription',
          'Edm.String',
          true
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
         * Static representation of the {@link shipRental} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_RENTAL: fieldBuilder.buildEnumField('ShipRental', NoYes, true),
        /**
         * Static representation of the {@link shipIdExternal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_ID_EXTERNAL: fieldBuilder.buildEdmTypeField(
          'ShipIdExternal',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LandedCostVoyageTables)
      };
    }

    return this._schema;
  }
}

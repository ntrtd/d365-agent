/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransportationTenderHistories } from './TransportationTenderHistories';
import { TransportationTenderHistoriesRequestBuilder } from './TransportationTenderHistoriesRequestBuilder';
import { TransportationTendersApi } from './TransportationTendersApi';
import { TmsTenderStatus } from './TmsTenderStatus';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TransportationTenderHistoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TransportationTenderHistories<DeSerializersT>, DeSerializersT>
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
  ): TransportationTenderHistoriesApi<DeSerializersT> {
    return new TransportationTenderHistoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link tmsTransportationTender} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TMS_TRANSPORTATION_TENDER: OneToOneLink<
      TransportationTenderHistories<DeSerializersT>,
      DeSerializersT,
      TransportationTendersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TransportationTendersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TMS_TRANSPORTATION_TENDER: new OneToOneLink(
        'TMSTransportationTender',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TransportationTenderHistories;

  requestBuilder(): TransportationTenderHistoriesRequestBuilder<DeSerializersT> {
    return new TransportationTenderHistoriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransportationTenderHistories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransportationTenderHistories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransportationTenderHistories<DeSerializersT>,
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
    typeof TransportationTenderHistories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransportationTenderHistories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSPORTATION_TENDER_ID: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSPORTATION_TENDER_HISTORY_ENTRY_NUMBER: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TRANSPORTATION_DISTANCE_MILES: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REQUESTED_RATE: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATED_GROSS_WEIGHT: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_CARRIER_ID: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENDER_STATUS: EnumField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      TmsTenderStatus,
      true,
      true
    >;
    REQUESTED_PICKUP_DATE_TIME: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONFIRMED_PICKUP_DATE_TIME: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONFIRMED_RATE: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_EQUIPMENT_CODE: OrderableEdmTypeField<
      TransportationTenderHistories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tmsTransportationTender} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TMS_TRANSPORTATION_TENDER: OneToOneLink<
      TransportationTenderHistories<DeSerializersT>,
      DeSerializersT,
      TransportationTendersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TransportationTenderHistories<DeSerializers>>;
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
         * Static representation of the {@link transportationTenderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_TENDER_ID: fieldBuilder.buildEdmTypeField(
          'TransportationTenderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transportationTenderHistoryEntryNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_TENDER_HISTORY_ENTRY_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'TransportationTenderHistoryEntryNumber',
            'Edm.Int64',
            false
          ),
        /**
         * Static representation of the {@link transportationDistanceMiles} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DISTANCE_MILES: fieldBuilder.buildEdmTypeField(
          'TransportationDistanceMiles',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link requestedRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_RATE: fieldBuilder.buildEdmTypeField(
          'RequestedRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calculatedGrossWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_GROSS_WEIGHT: fieldBuilder.buildEdmTypeField(
          'CalculatedGrossWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shippingCarrierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_ID: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tenderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_STATUS: fieldBuilder.buildEnumField(
          'TenderStatus',
          TmsTenderStatus,
          true
        ),
        /**
         * Static representation of the {@link requestedPickupDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_PICKUP_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'RequestedPickupDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link confirmedPickupDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_PICKUP_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ConfirmedPickupDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link confirmedRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMED_RATE: fieldBuilder.buildEdmTypeField(
          'ConfirmedRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link shippingCarrierVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_CARRIER_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingCarrierVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportationEquipmentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_EQUIPMENT_CODE: fieldBuilder.buildEdmTypeField(
          'TransportationEquipmentCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransportationTenderHistories)
      };
    }

    return this._schema;
  }
}

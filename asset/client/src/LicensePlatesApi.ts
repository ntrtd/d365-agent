/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LicensePlates } from './LicensePlates';
import { LicensePlatesRequestBuilder } from './LicensePlatesRequestBuilder';
import { CycleCountingWarehouseWorkLinesV2Api } from './CycleCountingWarehouseWorkLinesV2Api';
import { LicensePlateReceivingRegistrationsHistoryApi } from './LicensePlateReceivingRegistrationsHistoryApi';
import { ItemArrivalJournalLinesV2Api } from './ItemArrivalJournalLinesV2Api';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { CycleCountingWarehouseWorkLinesV3Api } from './CycleCountingWarehouseWorkLinesV3Api';
import { ItemArrivalJournalHeadersV2Api } from './ItemArrivalJournalHeadersV2Api';
import { OrderCommittedLicensePlateReservationsApi } from './OrderCommittedLicensePlateReservationsApi';
import { CycleCountingWarehouseWorkLinesApi } from './CycleCountingWarehouseWorkLinesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class LicensePlatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LicensePlates<DeSerializersT>, DeSerializersT>
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
  ): LicensePlatesApi<DeSerializersT> {
    return new LicensePlatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link licensePlateReceivedDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LICENSE_PLATE_RECEIVED_DETAILS: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      LicensePlateReceivingRegistrationsHistoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orderCommittedLicensePlateReservations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_COMMITTED_LICENSE_PLATE_RESERVATIONS: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      OrderCommittedLicensePlateReservationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>,
      LicensePlateReceivingRegistrationsHistoryApi<DeSerializersT>,
      ItemArrivalJournalLinesV2Api<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>,
      OrderCommittedLicensePlateReservationsApi<DeSerializersT>,
      CycleCountingWarehouseWorkLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: new OneToManyLink(
        'CycleCountingWarehouseWorkLinesV2',
        this,
        linkedApis[0]
      ),
      LICENSE_PLATE_RECEIVED_DETAILS: new OneToManyLink(
        'LicensePlateReceivedDetails',
        this,
        linkedApis[1]
      ),
      ITEM_ARRIVAL_JOURNAL_LINES_V_2: new OneToManyLink(
        'ItemArrivalJournalLinesV2',
        this,
        linkedApis[2]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[3]
      ),
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: new OneToManyLink(
        'CycleCountingWarehouseWorkLinesV3',
        this,
        linkedApis[4]
      ),
      ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: new OneToManyLink(
        'ItemArrivalJournalHeadersV2',
        this,
        linkedApis[5]
      ),
      ORDER_COMMITTED_LICENSE_PLATE_RESERVATIONS: new OneToManyLink(
        'OrderCommittedLicensePlateReservations',
        this,
        linkedApis[6]
      ),
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES: new OneToManyLink(
        'CycleCountingWarehouseWorkLines',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = LicensePlates;

  requestBuilder(): LicensePlatesRequestBuilder<DeSerializersT> {
    return new LicensePlatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LicensePlates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LicensePlates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LicensePlates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LicensePlates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LicensePlates, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LicensePlates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      LicensePlates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEVEL: OrderableEdmTypeField<
      LicensePlates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AGING_DATE: OrderableEdmTypeField<
      LicensePlates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONTAINER_TYPE_ID: OrderableEdmTypeField<
      LicensePlates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      LicensePlates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link licensePlateReceivedDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LICENSE_PLATE_RECEIVED_DETAILS: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      LicensePlateReceivingRegistrationsHistoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link orderCommittedLicensePlateReservations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ORDER_COMMITTED_LICENSE_PLATE_RESERVATIONS: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      OrderCommittedLicensePlateReservationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES: OneToManyLink<
      LicensePlates<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LicensePlates<DeSerializers>>;
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
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link level} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL: fieldBuilder.buildEdmTypeField('Level', 'Edm.Int32', false),
        /**
         * Static representation of the {@link agingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_DATE: fieldBuilder.buildEdmTypeField(
          'AgingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link containerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTAINER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ContainerTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentLicensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParentLicensePlateNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LicensePlates)
      };
    }

    return this._schema;
  }
}

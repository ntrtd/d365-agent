/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WhsMobileWorkGuidedCycleCounting } from './WhsMobileWorkGuidedCycleCounting';
import { WhsMobileWorkGuidedCycleCountingRequestBuilder } from './WhsMobileWorkGuidedCycleCountingRequestBuilder';
import { WhsMobileWorkSessionsApi } from './WhsMobileWorkSessionsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WhsMobileWorkGuidedCycleCountingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WhsMobileWorkGuidedCycleCounting<DeSerializersT>, DeSerializersT>
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
  ): WhsMobileWorkGuidedCycleCountingApi<DeSerializersT> {
    return new WhsMobileWorkGuidedCycleCountingApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link session} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SESSION: OneToOneLink<
      WhsMobileWorkGuidedCycleCounting<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkSessionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WhsMobileWorkSessionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SESSION: new OneToOneLink('Session', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = WhsMobileWorkGuidedCycleCounting;

  requestBuilder(): WhsMobileWorkGuidedCycleCountingRequestBuilder<DeSerializersT> {
    return new WhsMobileWorkGuidedCycleCountingRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WhsMobileWorkGuidedCycleCounting<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WhsMobileWorkGuidedCycleCounting<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WhsMobileWorkGuidedCycleCounting<DeSerializersT>,
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
    typeof WhsMobileWorkGuidedCycleCounting,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WhsMobileWorkGuidedCycleCounting,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RECORD_ID: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SESSION_REC_ID: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUBMISSION_TYPE: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_STATUS_ID_OPTIONS: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ERROR: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MUTABLE_PROPERTIES: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CYCLE_COUNT_QTY_1: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WMS_LOCATION_ID: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CYCLE_COUNT_UOM_1: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CYCLE_COUNT_UOM_1_OPTIONS: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_ID: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_STATUS_ID: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RF_DESCRIPTION_1: OrderableEdmTypeField<
      WhsMobileWorkGuidedCycleCounting<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link session} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SESSION: OneToOneLink<
      WhsMobileWorkGuidedCycleCounting<DeSerializersT>,
      DeSerializersT,
      WhsMobileWorkSessionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WhsMobileWorkGuidedCycleCounting<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link sessionRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_REC_ID: fieldBuilder.buildEdmTypeField(
          'SessionRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link submissionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMISSION_TYPE: fieldBuilder.buildEdmTypeField(
          'SubmissionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventStatusIdOptions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STATUS_ID_OPTIONS: fieldBuilder.buildEdmTypeField(
          'InventStatusId_Options',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link error} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR: fieldBuilder.buildEdmTypeField('Error', 'Edm.String', true),
        /**
         * Static representation of the {@link mutableProperties} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUTABLE_PROPERTIES: fieldBuilder.buildEdmTypeField(
          'MutableProperties',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cycleCountQty1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_COUNT_QTY_1: fieldBuilder.buildEdmTypeField(
          'CycleCountQty1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wmsLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WMSLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cycleCountUom1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_COUNT_UOM_1: fieldBuilder.buildEdmTypeField(
          'CycleCountUOM1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cycleCountUom1Options} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_COUNT_UOM_1_OPTIONS: fieldBuilder.buildEdmTypeField(
          'CycleCountUOM1_Options',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link licensePlateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_ID: fieldBuilder.buildEdmTypeField(
          'LicensePlateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rfDescription1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RF_DESCRIPTION_1: fieldBuilder.buildEdmTypeField(
          'RFDescription1',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WhsMobileWorkGuidedCycleCounting)
      };
    }

    return this._schema;
  }
}

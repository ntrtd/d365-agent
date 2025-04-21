/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JournalPeriodFinalPrintBEs } from './JournalPeriodFinalPrintBEs';
import { JournalPeriodFinalPrintBEsRequestBuilder } from './JournalPeriodFinalPrintBEsRequestBuilder';
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
export class JournalPeriodFinalPrintBEsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<JournalPeriodFinalPrintBEs<DeSerializersT>, DeSerializersT>
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
  ): JournalPeriodFinalPrintBEsApi<DeSerializersT> {
    return new JournalPeriodFinalPrintBEsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = JournalPeriodFinalPrintBEs;

  requestBuilder(): JournalPeriodFinalPrintBEsRequestBuilder<DeSerializersT> {
    return new JournalPeriodFinalPrintBEsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JournalPeriodFinalPrintBEs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      JournalPeriodFinalPrintBEs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JournalPeriodFinalPrintBEs<DeSerializersT>,
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
    typeof JournalPeriodFinalPrintBEs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JournalPeriodFinalPrintBEs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      JournalPeriodFinalPrintBEs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL: OrderableEdmTypeField<
      JournalPeriodFinalPrintBEs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START: OrderableEdmTypeField<
      JournalPeriodFinalPrintBEs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END: OrderableEdmTypeField<
      JournalPeriodFinalPrintBEs<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPRESSED: EnumField<
      JournalPeriodFinalPrintBEs<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_LAST_PAGE: OrderableEdmTypeField<
      JournalPeriodFinalPrintBEs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<JournalPeriodFinalPrintBEs<DeSerializers>>;
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
         * Static representation of the {@link journal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL: fieldBuilder.buildEdmTypeField('Journal', 'Edm.String', false),
        /**
         * Static representation of the {@link start} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START: fieldBuilder.buildEdmTypeField(
          'Start',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link end} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END: fieldBuilder.buildEdmTypeField('End', 'Edm.DateTimeOffset', false),
        /**
         * Static representation of the {@link compressed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPRESSED: fieldBuilder.buildEnumField('Compressed', NoYes, true),
        /**
         * Static representation of the {@link numberLastPage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_LAST_PAGE: fieldBuilder.buildEdmTypeField(
          'NumberLastPage',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JournalPeriodFinalPrintBEs)
      };
    }

    return this._schema;
  }
}

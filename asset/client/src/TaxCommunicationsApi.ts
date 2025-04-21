/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCommunications } from './TaxCommunications';
import { TaxCommunicationsRequestBuilder } from './TaxCommunicationsRequestBuilder';
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
export class TaxCommunicationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxCommunications<DeSerializersT>, DeSerializersT>
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
  ): TaxCommunicationsApi<DeSerializersT> {
    return new TaxCommunicationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxCommunications;

  requestBuilder(): TaxCommunicationsRequestBuilder<DeSerializersT> {
    return new TaxCommunicationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxCommunications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxCommunications<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxCommunications<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof TaxCommunications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxCommunications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxCommunications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    YEARS: OrderableEdmTypeField<
      TaxCommunications<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ATECOFIN_CODE: OrderableEdmTypeField<
      TaxCommunications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DATE_OF_EXPORT: OrderableEdmTypeField<
      TaxCommunications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPORTED: EnumField<
      TaxCommunications<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_COMMUNICATION_ID: OrderableEdmTypeField<
      TaxCommunications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPORT_FILE_NAME: OrderableEdmTypeField<
      TaxCommunications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxCommunications<DeSerializers>>;
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
         * Static representation of the {@link years} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEARS: fieldBuilder.buildEdmTypeField('Years', 'Edm.Int32', false),
        /**
         * Static representation of the {@link atecofinCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATECOFIN_CODE: fieldBuilder.buildEdmTypeField(
          'ATECOFINCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dateOfExport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_EXPORT: fieldBuilder.buildEdmTypeField(
          'DateOfExport',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORTED: fieldBuilder.buildEnumField('Exported', NoYes, true),
        /**
         * Static representation of the {@link taxCommunicationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_COMMUNICATION_ID: fieldBuilder.buildEdmTypeField(
          'TaxCommunicationID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exportFileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_FILE_NAME: fieldBuilder.buildEdmTypeField(
          'ExportFileName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxCommunications)
      };
    }

    return this._schema;
  }
}

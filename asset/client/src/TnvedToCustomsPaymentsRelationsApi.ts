/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TnvedToCustomsPaymentsRelations } from './TnvedToCustomsPaymentsRelations';
import { TnvedToCustomsPaymentsRelationsRequestBuilder } from './TnvedToCustomsPaymentsRelationsRequestBuilder';
import { CustomAllImportExportRu } from './CustomAllImportExportRu';
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
export class TnvedToCustomsPaymentsRelationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TnvedToCustomsPaymentsRelations<DeSerializersT>, DeSerializersT>
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
  ): TnvedToCustomsPaymentsRelationsApi<DeSerializersT> {
    return new TnvedToCustomsPaymentsRelationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TnvedToCustomsPaymentsRelations;

  requestBuilder(): TnvedToCustomsPaymentsRelationsRequestBuilder<DeSerializersT> {
    return new TnvedToCustomsPaymentsRelationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TnvedToCustomsPaymentsRelations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TnvedToCustomsPaymentsRelations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TnvedToCustomsPaymentsRelations<DeSerializersT>,
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
    typeof TnvedToCustomsPaymentsRelations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TnvedToCustomsPaymentsRelations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TnvedToCustomsPaymentsRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      TnvedToCustomsPaymentsRelations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TN_VED_CODE: OrderableEdmTypeField<
      TnvedToCustomsPaymentsRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIRECTION: EnumField<
      TnvedToCustomsPaymentsRelations<DeSerializers>,
      DeSerializersT,
      CustomAllImportExportRu,
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      TnvedToCustomsPaymentsRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VAT: OrderableEdmTypeField<
      TnvedToCustomsPaymentsRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMS_DUTY: OrderableEdmTypeField<
      TnvedToCustomsPaymentsRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE: OrderableEdmTypeField<
      TnvedToCustomsPaymentsRelations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TnvedToCustomsPaymentsRelations<DeSerializers>>;
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
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link tnVedCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TN_VED_CODE: fieldBuilder.buildEdmTypeField(
          'TnVedCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link direction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECTION: fieldBuilder.buildEnumField(
          'Direction',
          CustomAllImportExportRu,
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT: fieldBuilder.buildEdmTypeField('VAT', 'Edm.String', false),
        /**
         * Static representation of the {@link customsDuty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_DUTY: fieldBuilder.buildEdmTypeField(
          'CustomsDuty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link excise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE: fieldBuilder.buildEdmTypeField('Excise', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TnvedToCustomsPaymentsRelations)
      };
    }

    return this._schema;
  }
}

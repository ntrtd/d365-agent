/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmBankGroups } from './LtmBankGroups';
import { LtmBankGroupsRequestBuilder } from './LtmBankGroupsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class LtmBankGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmBankGroups<DeSerializersT>, DeSerializersT>
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
  ): LtmBankGroupsApi<DeSerializersT> {
    return new LtmBankGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmBankGroups;

  requestBuilder(): LtmBankGroupsRequestBuilder<DeSerializersT> {
    return new LtmBankGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmBankGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmBankGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LtmBankGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LtmBankGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LtmBankGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_GROUP_ID: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONCEPT_3: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_DOC_TYPE_ID: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_PAYER_TYPE_ID: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_1: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCEPT_2: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_DOC_TYPE_ID: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_DOC_NUM: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_ID: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_DOC_NUM: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_3: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_2: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_1: OrderableEdmTypeField<
      LtmBankGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmBankGroups<DeSerializers>>;
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
         * Static representation of the {@link bankGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BankGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link concept3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_3: fieldBuilder.buildEdmTypeField(
          'Concept3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryDocTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_DOC_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'CountryDocTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxPayerTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PAYER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TaxPayerTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link concept1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_1: fieldBuilder.buildEdmTypeField(
          'Concept1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link concept2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCEPT_2: fieldBuilder.buildEdmTypeField(
          'Concept2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateDocTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_DOC_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'StateDocTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'StateDocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ID: fieldBuilder.buildEdmTypeField('StateId', 'Edm.String', true),
        /**
         * Static representation of the {@link countryDocNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_DOC_NUM: fieldBuilder.buildEdmTypeField(
          'CountryDocNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_3: fieldBuilder.buildEdmTypeField('Note3', 'Edm.String', true),
        /**
         * Static representation of the {@link note2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_2: fieldBuilder.buildEdmTypeField('Note2', 'Edm.String', true),
        /**
         * Static representation of the {@link note1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_1: fieldBuilder.buildEdmTypeField('Note1', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmBankGroups)
      };
    }

    return this._schema;
  }
}

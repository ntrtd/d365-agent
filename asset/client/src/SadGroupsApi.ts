/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SadGroups } from './SadGroups';
import { SadGroupsRequestBuilder } from './SadGroupsRequestBuilder';
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
export class SadGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SadGroups<DeSerializersT>, DeSerializersT>
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
  ): SadGroupsApi<DeSerializersT> {
    return new SadGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SadGroups;

  requestBuilder(): SadGroupsRequestBuilder<DeSerializersT> {
    return new SadGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SadGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SadGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SadGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SadGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SadGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SadGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SAD_GROUP: OrderableEdmTypeField<
      SadGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DUTY: OrderableEdmTypeField<
      SadGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VAT_CODE: OrderableEdmTypeField<
      SadGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      SadGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCISE: OrderableEdmTypeField<
      SadGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SadGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      SadGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SadGroups<DeSerializers>>;
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
         * Static representation of the {@link sadGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAD_GROUP: fieldBuilder.buildEdmTypeField(
          'SADGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link duty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUTY: fieldBuilder.buildEdmTypeField('Duty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link vatCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_CODE: fieldBuilder.buildEdmTypeField('VATCode', 'Edm.String', true),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link excise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCISE: fieldBuilder.buildEdmTypeField('Excise', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SadGroups)
      };
    }

    return this._schema;
  }
}

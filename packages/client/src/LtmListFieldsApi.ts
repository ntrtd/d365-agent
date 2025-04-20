/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmListFields } from './LtmListFields';
import { LtmListFieldsRequestBuilder } from './LtmListFieldsRequestBuilder';
import { LtmListFieldId } from './LtmListFieldId';
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
export class LtmListFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmListFields<DeSerializersT>, DeSerializersT>
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
  ): LtmListFieldsApi<DeSerializersT> {
    return new LtmListFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmListFields;

  requestBuilder(): LtmListFieldsRequestBuilder<DeSerializersT> {
    return new LtmListFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmListFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmListFields<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LtmListFields<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LtmListFields, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LtmListFields, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmListFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIST_FIELD_ID: EnumField<
      LtmListFields<DeSerializers>,
      DeSerializersT,
      LtmListFieldId,
      true,
      true
    >;
    LIST_FIELD_LABEL: OrderableEdmTypeField<
      LtmListFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmListFields<DeSerializers>>;
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
         * Static representation of the {@link listFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_ID: fieldBuilder.buildEnumField(
          'ListFieldId',
          LtmListFieldId,
          true
        ),
        /**
         * Static representation of the {@link listFieldLabel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIST_FIELD_LABEL: fieldBuilder.buildEdmTypeField(
          'ListFieldLabel',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmListFields)
      };
    }

    return this._schema;
  }
}

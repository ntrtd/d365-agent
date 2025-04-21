/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { McrCriteria } from './McrCriteria';
import { McrCriteriaRequestBuilder } from './McrCriteriaRequestBuilder';
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
export class McrCriteriaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<McrCriteria<DeSerializersT>, DeSerializersT>
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
  ): McrCriteriaApi<DeSerializersT> {
    return new McrCriteriaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = McrCriteria;

  requestBuilder(): McrCriteriaRequestBuilder<DeSerializersT> {
    return new McrCriteriaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    McrCriteria<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<McrCriteria<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<McrCriteria<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof McrCriteria, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(McrCriteria, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      McrCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      McrCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VIEW_OR_TABLE: OrderableEdmTypeField<
      McrCriteria<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<McrCriteria<DeSerializers>>;
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
         * Static representation of the {@link fieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'FieldName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link viewOrTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW_OR_TABLE: fieldBuilder.buildEdmTypeField(
          'ViewOrTable',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', McrCriteria)
      };
    }

    return this._schema;
  }
}

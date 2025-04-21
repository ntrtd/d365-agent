/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeCategories } from './EngineeringChangeCategories';
import { EngineeringChangeCategoriesRequestBuilder } from './EngineeringChangeCategoriesRequestBuilder';
import { EngineeringChangeOrderHeadersApi } from './EngineeringChangeOrderHeadersApi';
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
export class EngineeringChangeCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EngineeringChangeCategories<DeSerializersT>, DeSerializersT>
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
  ): EngineeringChangeCategoriesApi<DeSerializersT> {
    return new EngineeringChangeCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADERS: OneToManyLink<
      EngineeringChangeCategories<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EngineeringChangeOrderHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_CHANGE_ORDER_HEADERS: new OneToManyLink(
        'EngineeringChangeOrderHeaders',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EngineeringChangeCategories;

  requestBuilder(): EngineeringChangeCategoriesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeCategories<DeSerializersT>,
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
    typeof EngineeringChangeCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CATEGORY_NAME: OrderableEdmTypeField<
      EngineeringChangeCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringChangeOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_HEADERS: OneToManyLink<
      EngineeringChangeCategories<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringChangeCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link categoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'CategoryName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringChangeCategories)
      };
    }

    return this._schema;
  }
}

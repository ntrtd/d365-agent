/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DateGregorians } from './DateGregorians';
import { DateGregoriansRequestBuilder } from './DateGregoriansRequestBuilder';
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
export class DateGregoriansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DateGregorians<DeSerializersT>, DeSerializersT>
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
  ): DateGregoriansApi<DeSerializersT> {
    return new DateGregoriansApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DateGregorians;

  requestBuilder(): DateGregoriansRequestBuilder<DeSerializersT> {
    return new DateGregoriansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DateGregorians<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DateGregorians<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DateGregorians<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof DateGregorians, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(DateGregorians, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GREGORIAN_DATE: OrderableEdmTypeField<
      DateGregorians<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GREGORIAN_DATE_ID: OrderableEdmTypeField<
      DateGregorians<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<DateGregorians<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link gregorianDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GREGORIAN_DATE: fieldBuilder.buildEdmTypeField(
          'GregorianDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link gregorianDateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GREGORIAN_DATE_ID: fieldBuilder.buildEdmTypeField(
          'GregorianDateId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DateGregorians)
      };
    }

    return this._schema;
  }
}

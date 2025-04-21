/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseDelegates } from './ExpenseDelegates';
import { ExpenseDelegatesRequestBuilder } from './ExpenseDelegatesRequestBuilder';
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
export class ExpenseDelegatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseDelegates<DeSerializersT>, DeSerializersT>
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
  ): ExpenseDelegatesApi<DeSerializersT> {
    return new ExpenseDelegatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpenseDelegates;

  requestBuilder(): ExpenseDelegatesRequestBuilder<DeSerializersT> {
    return new ExpenseDelegatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseDelegates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseDelegates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExpenseDelegates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExpenseDelegates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseDelegates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseDelegates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELEGATED_USER: OrderableEdmTypeField<
      ExpenseDelegates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELEGATING_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ExpenseDelegates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE_UTC: OrderableEdmTypeField<
      ExpenseDelegates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE_UTC: OrderableEdmTypeField<
      ExpenseDelegates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELEGATED_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ExpenseDelegates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpenseDelegates<DeSerializers>>;
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
         * Static representation of the {@link delegatedUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELEGATED_USER: fieldBuilder.buildEdmTypeField(
          'DelegatedUser',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link delegatingPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELEGATING_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DelegatingPersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromDateUtc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE_UTC: fieldBuilder.buildEdmTypeField(
          'FromDateUTC',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link toDateUtc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE_UTC: fieldBuilder.buildEdmTypeField(
          'ToDateUTC',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link delegatedPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELEGATED_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DelegatedPersonnelNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseDelegates)
      };
    }

    return this._schema;
  }
}

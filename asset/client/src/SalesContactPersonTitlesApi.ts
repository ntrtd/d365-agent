/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesContactPersonTitles } from './SalesContactPersonTitles';
import { SalesContactPersonTitlesRequestBuilder } from './SalesContactPersonTitlesRequestBuilder';
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
export class SalesContactPersonTitlesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesContactPersonTitles<DeSerializersT>, DeSerializersT>
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
  ): SalesContactPersonTitlesApi<DeSerializersT> {
    return new SalesContactPersonTitlesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SalesContactPersonTitles;

  requestBuilder(): SalesContactPersonTitlesRequestBuilder<DeSerializersT> {
    return new SalesContactPersonTitlesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesContactPersonTitles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesContactPersonTitles<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesContactPersonTitles<DeSerializersT>,
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
    typeof SalesContactPersonTitles,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesContactPersonTitles,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesContactPersonTitles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TITLE_ALIAS: OrderableEdmTypeField<
      SalesContactPersonTitles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TITLE: OrderableEdmTypeField<
      SalesContactPersonTitles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<SalesContactPersonTitles<DeSerializers>>;
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
         * Static representation of the {@link jobTitleAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TITLE_ALIAS: fieldBuilder.buildEdmTypeField(
          'JobTitleAlias',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TITLE: fieldBuilder.buildEdmTypeField(
          'JobTitle',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesContactPersonTitles)
      };
    }

    return this._schema;
  }
}

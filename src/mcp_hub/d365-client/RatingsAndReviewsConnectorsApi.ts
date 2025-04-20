/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RatingsAndReviewsConnectors } from './RatingsAndReviewsConnectors';
import { RatingsAndReviewsConnectorsRequestBuilder } from './RatingsAndReviewsConnectorsRequestBuilder';
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
export class RatingsAndReviewsConnectorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RatingsAndReviewsConnectors<DeSerializersT>, DeSerializersT>
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
  ): RatingsAndReviewsConnectorsApi<DeSerializersT> {
    return new RatingsAndReviewsConnectorsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RatingsAndReviewsConnectors;

  requestBuilder(): RatingsAndReviewsConnectorsRequestBuilder<DeSerializersT> {
    return new RatingsAndReviewsConnectorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RatingsAndReviewsConnectors<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RatingsAndReviewsConnectors<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RatingsAndReviewsConnectors<DeSerializersT>,
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
    typeof RatingsAndReviewsConnectors,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RatingsAndReviewsConnectors,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      RatingsAndReviewsConnectors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANIFEST: OrderableEdmTypeField<
      RatingsAndReviewsConnectors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTINUATION_TOKEN: OrderableEdmTypeField<
      RatingsAndReviewsConnectors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      RatingsAndReviewsConnectors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RatingsAndReviewsConnectors<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link manifest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANIFEST: fieldBuilder.buildEdmTypeField(
          'Manifest',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link continuationToken} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUATION_TOKEN: fieldBuilder.buildEdmTypeField(
          'ContinuationToken',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('Url', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RatingsAndReviewsConnectors)
      };
    }

    return this._schema;
  }
}

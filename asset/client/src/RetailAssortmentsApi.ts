/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailAssortments } from './RetailAssortments';
import { RetailAssortmentsRequestBuilder } from './RetailAssortmentsRequestBuilder';
import { RetailAssortmentChannelLinesApi } from './RetailAssortmentChannelLinesApi';
import { RetailAssortmentStatusType } from './RetailAssortmentStatusType';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailAssortmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailAssortments<DeSerializersT>, DeSerializersT>
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
  ): RetailAssortmentsApi<DeSerializersT> {
    return new RetailAssortmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailAssortmentChannelLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_ASSORTMENT_CHANNEL_LINE: OneToManyLink<
      RetailAssortments<DeSerializersT>,
      DeSerializersT,
      RetailAssortmentChannelLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailAssortmentChannelLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_ASSORTMENT_CHANNEL_LINE: new OneToManyLink(
        'RetailAssortmentChannelLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailAssortments;

  requestBuilder(): RetailAssortmentsRequestBuilder<DeSerializersT> {
    return new RetailAssortmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailAssortments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailAssortments<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailAssortments<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailAssortments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailAssortments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ASSORTMENT_ID: OrderableEdmTypeField<
      RetailAssortments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailAssortments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      RetailAssortments<DeSerializers>,
      DeSerializersT,
      RetailAssortmentStatusType,
      true,
      true
    >;
    PUBLISHED_DATE_TIME: OrderableEdmTypeField<
      RetailAssortments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      RetailAssortments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      RetailAssortments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailAssortmentChannelLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_ASSORTMENT_CHANNEL_LINE: OneToManyLink<
      RetailAssortments<DeSerializersT>,
      DeSerializersT,
      RetailAssortmentChannelLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailAssortments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link assortmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSORTMENT_ID: fieldBuilder.buildEdmTypeField(
          'AssortmentID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailAssortmentStatusType,
          true
        ),
        /**
         * Static representation of the {@link publishedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISHED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PublishedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailAssortments)
      };
    }

    return this._schema;
  }
}

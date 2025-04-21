/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StdSeqs } from './StdSeqs';
import { StdSeqsRequestBuilder } from './StdSeqsRequestBuilder';
import { RTax25StdModuleType } from './RTax25StdModuleType';
import { RTax25StdChannelType } from './RTax25StdChannelType';
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
export class StdSeqsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<StdSeqs<DeSerializersT>, DeSerializersT>
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
  ): StdSeqsApi<DeSerializersT> {
    return new StdSeqsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = StdSeqs;

  requestBuilder(): StdSeqsRequestBuilder<DeSerializersT> {
    return new StdSeqsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<StdSeqs<DeSerializersT>, DeSerializersT> {
    return entityBuilder<StdSeqs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<StdSeqs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof StdSeqs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(StdSeqs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      StdSeqs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      StdSeqs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    APPLIED_MODULE: EnumField<
      StdSeqs<DeSerializers>,
      DeSerializersT,
      RTax25StdModuleType,
      true,
      true
    >;
    CHANNEL: EnumField<
      StdSeqs<DeSerializers>,
      DeSerializersT,
      RTax25StdChannelType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      StdSeqs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANNEL_REFERENCE: OrderableEdmTypeField<
      StdSeqs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<StdSeqs<DeSerializers>>;
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
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField(
          'Sequence',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link appliedModule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLIED_MODULE: fieldBuilder.buildEnumField(
          'AppliedModule',
          RTax25StdModuleType,
          true
        ),
        /**
         * Static representation of the {@link channel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL: fieldBuilder.buildEnumField(
          'Channel',
          RTax25StdChannelType,
          true
        ),
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
         * Static representation of the {@link channelReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANNEL_REFERENCE: fieldBuilder.buildEdmTypeField(
          'ChannelReference',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', StdSeqs)
      };
    }

    return this._schema;
  }
}

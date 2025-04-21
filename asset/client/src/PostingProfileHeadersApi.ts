/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PostingProfileHeaders } from './PostingProfileHeaders';
import { PostingProfileHeadersRequestBuilder } from './PostingProfileHeadersRequestBuilder';
import { NoYes } from './NoYes';
import { DimSettlementCtrlTypeRu } from './DimSettlementCtrlTypeRu';
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
export class PostingProfileHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PostingProfileHeaders<DeSerializersT>, DeSerializersT>
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
  ): PostingProfileHeadersApi<DeSerializersT> {
    return new PostingProfileHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PostingProfileHeaders;

  requestBuilder(): PostingProfileHeadersRequestBuilder<DeSerializersT> {
    return new PostingProfileHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PostingProfileHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PostingProfileHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PostingProfileHeaders<DeSerializersT>,
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
    typeof PostingProfileHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PostingProfileHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PostingProfileHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      PostingProfileHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_TRANSACTION_CANCEL_ENABLED: EnumField<
      PostingProfileHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    POSTING_PROFILE_TO_CLOSE_SETTLEMENT: OrderableEdmTypeField<
      PostingProfileHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PostingProfileHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TRANSACTION_INCLUDED_IN_AUTO_SETTLEMENT: EnumField<
      PostingProfileHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_EMPTY_DIMENSION_VALUE: EnumField<
      PostingProfileHeaders<DeSerializers>,
      DeSerializersT,
      DimSettlementCtrlTypeRu,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PostingProfileHeaders<DeSerializers>>;
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
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isTransactionCancelEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSACTION_CANCEL_ENABLED: fieldBuilder.buildEnumField(
          'IsTransactionCancelEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link postingProfileToCloseSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_TO_CLOSE_SETTLEMENT: fieldBuilder.buildEdmTypeField(
          'PostingProfileToCloseSettlement',
          'Edm.String',
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
         * Static representation of the {@link isTransactionIncludedInAutoSettlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSACTION_INCLUDED_IN_AUTO_SETTLEMENT: fieldBuilder.buildEnumField(
          'IsTransactionIncludedInAutoSettlement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowEmptyDimensionValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EMPTY_DIMENSION_VALUE: fieldBuilder.buildEnumField(
          'AllowEmptyDimensionValue',
          DimSettlementCtrlTypeRu,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PostingProfileHeaders)
      };
    }

    return this._schema;
  }
}

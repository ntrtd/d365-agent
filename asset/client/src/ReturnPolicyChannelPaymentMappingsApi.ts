/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReturnPolicyChannelPaymentMappings } from './ReturnPolicyChannelPaymentMappings';
import { ReturnPolicyChannelPaymentMappingsRequestBuilder } from './ReturnPolicyChannelPaymentMappingsRequestBuilder';
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
export class ReturnPolicyChannelPaymentMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ReturnPolicyChannelPaymentMappings<DeSerializersT>,
      DeSerializersT
    >
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
  ): ReturnPolicyChannelPaymentMappingsApi<DeSerializersT> {
    return new ReturnPolicyChannelPaymentMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReturnPolicyChannelPaymentMappings;

  requestBuilder(): ReturnPolicyChannelPaymentMappingsRequestBuilder<DeSerializersT> {
    return new ReturnPolicyChannelPaymentMappingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReturnPolicyChannelPaymentMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReturnPolicyChannelPaymentMappings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReturnPolicyChannelPaymentMappings<DeSerializersT>,
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
    typeof ReturnPolicyChannelPaymentMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReturnPolicyChannelPaymentMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReturnPolicyChannelPaymentMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETAIL_RETURN_POLICY_CHANNEL_POLICY_NAME: OrderableEdmTypeField<
      ReturnPolicyChannelPaymentMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORIGINAL_TENDER_TYPE_ID: OrderableEdmTypeField<
      ReturnPolicyChannelPaymentMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ReturnPolicyChannelPaymentMappings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOWED_RETURN_TENDER_TYPE_ID: OrderableEdmTypeField<
      ReturnPolicyChannelPaymentMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ReturnPolicyChannelPaymentMappings<DeSerializers>>;
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
         * Static representation of the {@link retailReturnPolicyChannelPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_RETURN_POLICY_CHANNEL_POLICY_NAME:
          fieldBuilder.buildEdmTypeField(
            'RetailReturnPolicyChannel_PolicyName',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link originalTenderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_TENDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'OriginalTenderTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowedReturnTenderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_RETURN_TENDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'AllowedReturnTenderTypeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReturnPolicyChannelPaymentMappings)
      };
    }

    return this._schema;
  }
}

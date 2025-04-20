/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1JobFunctions } from './PayIntV1JobFunctions';
import { PayIntV1JobFunctionsRequestBuilder } from './PayIntV1JobFunctionsRequestBuilder';
import { HcmRegulatoryJobCategory } from './HcmRegulatoryJobCategory';
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
export class PayIntV1JobFunctionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1JobFunctions<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1JobFunctionsApi<DeSerializersT> {
    return new PayIntV1JobFunctionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1JobFunctions;

  requestBuilder(): PayIntV1JobFunctionsRequestBuilder<DeSerializersT> {
    return new PayIntV1JobFunctionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1JobFunctions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayIntV1JobFunctions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1JobFunctions<DeSerializersT>,
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
    typeof PayIntV1JobFunctions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1JobFunctions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    JOB_FUNCTION_ID: OrderableEdmTypeField<
      PayIntV1JobFunctions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGULATORY_JOB_CATEGORY: EnumField<
      PayIntV1JobFunctions<DeSerializers>,
      DeSerializersT,
      HcmRegulatoryJobCategory,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1JobFunctions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1JobFunctions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link jobFunctionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FUNCTION_ID: fieldBuilder.buildEdmTypeField(
          'JobFunctionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link regulatoryJobCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATORY_JOB_CATEGORY: fieldBuilder.buildEnumField(
          'RegulatoryJobCategory',
          HcmRegulatoryJobCategory,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1JobFunctions)
      };
    }

    return this._schema;
  }
}

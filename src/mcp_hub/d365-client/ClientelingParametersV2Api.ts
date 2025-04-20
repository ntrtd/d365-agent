/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ClientelingParametersV2 } from './ClientelingParametersV2';
import { ClientelingParametersV2RequestBuilder } from './ClientelingParametersV2RequestBuilder';
import { NoYes } from './NoYes';
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
export class ClientelingParametersV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ClientelingParametersV2<DeSerializersT>, DeSerializersT>
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
  ): ClientelingParametersV2Api<DeSerializersT> {
    return new ClientelingParametersV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ClientelingParametersV2;

  requestBuilder(): ClientelingParametersV2RequestBuilder<DeSerializersT> {
    return new ClientelingParametersV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ClientelingParametersV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ClientelingParametersV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ClientelingParametersV2<DeSerializersT>,
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
    typeof ClientelingParametersV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ClientelingParametersV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KEY: OrderableEdmTypeField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUSTOMER_INSIGHTS_APPLICATION_ID: OrderableEdmTypeField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_INSIGHTS_ENABLE_INTEGRATION: EnumField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_INSIGHTS_INSTANCE_ID: OrderableEdmTypeField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_INSIGHTS_AUTHORITY_URI: OrderableEdmTypeField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_INSIGHTS_ALTERNATIVE_CUSTOMER_ID_FIELD_NAME: OrderableEdmTypeField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_INSIGHTS_CUSTOMER_ATTRIBUTE_3: OrderableEdmTypeField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_INSIGHTS_CUSTOMER_ATTRIBUTE_1: OrderableEdmTypeField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_INSIGHTS_CUSTOMER_ATTRIBUTE_2: OrderableEdmTypeField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_INSIGHTS_APPLICATION_SECRET_NAME: OrderableEdmTypeField<
      ClientelingParametersV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ClientelingParametersV2<DeSerializers>>;
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
         * Static representation of the {@link key} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY: fieldBuilder.buildEdmTypeField('Key', 'Edm.Int32', false),
        /**
         * Static representation of the {@link customerInsightsApplicationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INSIGHTS_APPLICATION_ID: fieldBuilder.buildEdmTypeField(
          'CustomerInsightsApplicationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerInsightsEnableIntegration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INSIGHTS_ENABLE_INTEGRATION: fieldBuilder.buildEnumField(
          'CustomerInsightsEnableIntegration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link customerInsightsInstanceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INSIGHTS_INSTANCE_ID: fieldBuilder.buildEdmTypeField(
          'CustomerInsightsInstanceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerInsightsAuthorityUri} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INSIGHTS_AUTHORITY_URI: fieldBuilder.buildEdmTypeField(
          'CustomerInsightsAuthorityUri',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerInsightsAlternativeCustomerIdFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INSIGHTS_ALTERNATIVE_CUSTOMER_ID_FIELD_NAME:
          fieldBuilder.buildEdmTypeField(
            'CustomerInsightsAlternativeCustomerIdFieldName',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link customerInsightsCustomerAttribute3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INSIGHTS_CUSTOMER_ATTRIBUTE_3: fieldBuilder.buildEdmTypeField(
          'CustomerInsightsCustomerAttribute3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerInsightsCustomerAttribute1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INSIGHTS_CUSTOMER_ATTRIBUTE_1: fieldBuilder.buildEdmTypeField(
          'CustomerInsightsCustomerAttribute1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerInsightsCustomerAttribute2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INSIGHTS_CUSTOMER_ATTRIBUTE_2: fieldBuilder.buildEdmTypeField(
          'CustomerInsightsCustomerAttribute2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerInsightsApplicationSecretName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_INSIGHTS_APPLICATION_SECRET_NAME:
          fieldBuilder.buildEdmTypeField(
            'CustomerInsightsApplicationSecretName',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ClientelingParametersV2)
      };
    }

    return this._schema;
  }
}

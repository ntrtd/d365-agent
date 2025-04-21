/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomCounterAgents } from './CustomCounterAgents';
import { CustomCounterAgentsRequestBuilder } from './CustomCounterAgentsRequestBuilder';
import { CustomServiceProviderRu } from './CustomServiceProviderRu';
import { CustomPartnerTypeRu } from './CustomPartnerTypeRu';
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
export class CustomCounterAgentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomCounterAgents<DeSerializersT>, DeSerializersT>
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
  ): CustomCounterAgentsApi<DeSerializersT> {
    return new CustomCounterAgentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustomCounterAgents;

  requestBuilder(): CustomCounterAgentsRequestBuilder<DeSerializersT> {
    return new CustomCounterAgentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomCounterAgents<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomCounterAgents<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomCounterAgents<DeSerializersT>,
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
    typeof CustomCounterAgents,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomCounterAgents,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomCounterAgents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGENT_ACCOUNT_NUMBER: OrderableEdmTypeField<
      CustomCounterAgents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACQUIT_METHOD: EnumField<
      CustomCounterAgents<DeSerializers>,
      DeSerializersT,
      CustomServiceProviderRu,
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      CustomCounterAgents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomCounterAgents<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGENT_TYPE: EnumField<
      CustomCounterAgents<DeSerializers>,
      DeSerializersT,
      CustomPartnerTypeRu,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CustomCounterAgents<DeSerializers>>;
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
         * Static representation of the {@link agentAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AgentAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link acquitMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACQUIT_METHOD: fieldBuilder.buildEnumField(
          'AcquitMethod',
          CustomServiceProviderRu,
          true
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
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
         * Static representation of the {@link agentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENT_TYPE: fieldBuilder.buildEnumField(
          'AgentType',
          CustomPartnerTypeRu,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomCounterAgents)
      };
    }

    return this._schema;
  }
}

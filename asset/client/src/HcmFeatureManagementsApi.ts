/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HcmFeatureManagements } from './HcmFeatureManagements';
import { HcmFeatureManagementsRequestBuilder } from './HcmFeatureManagementsRequestBuilder';
import { FeatureModuleV0 } from './FeatureModuleV0';
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
export class HcmFeatureManagementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<HcmFeatureManagements<DeSerializersT>, DeSerializersT>
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
  ): HcmFeatureManagementsApi<DeSerializersT> {
    return new HcmFeatureManagementsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = HcmFeatureManagements;

  requestBuilder(): HcmFeatureManagementsRequestBuilder<DeSerializersT> {
    return new HcmFeatureManagementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HcmFeatureManagements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<HcmFeatureManagements<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HcmFeatureManagements<DeSerializersT>,
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
    typeof HcmFeatureManagements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HcmFeatureManagements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FEATURE_STATE_NAME: OrderableEdmTypeField<
      HcmFeatureManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE: EnumField<
      HcmFeatureManagements<DeSerializers>,
      DeSerializersT,
      FeatureModuleV0,
      true,
      true
    >;
    FEATURE_NAME: OrderableEdmTypeField<
      HcmFeatureManagements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FEATURE_STATE_IS_ENABLED: EnumField<
      HcmFeatureManagements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<HcmFeatureManagements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link featureStateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEATURE_STATE_NAME: fieldBuilder.buildEdmTypeField(
          'FeatureState_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEnumField('Module', FeatureModuleV0, true),
        /**
         * Static representation of the {@link featureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEATURE_NAME: fieldBuilder.buildEdmTypeField(
          'FeatureName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link featureStateIsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEATURE_STATE_IS_ENABLED: fieldBuilder.buildEnumField(
          'FeatureState_IsEnabled',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HcmFeatureManagements)
      };
    }

    return this._schema;
  }
}

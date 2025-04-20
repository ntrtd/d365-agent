/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EnvironmentalHealthAndSafetyCodes } from './EnvironmentalHealthAndSafetyCodes';
import { EnvironmentalHealthAndSafetyCodesRequestBuilder } from './EnvironmentalHealthAndSafetyCodesRequestBuilder';
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
export class EnvironmentalHealthAndSafetyCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EnvironmentalHealthAndSafetyCodes<DeSerializersT>, DeSerializersT>
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
  ): EnvironmentalHealthAndSafetyCodesApi<DeSerializersT> {
    return new EnvironmentalHealthAndSafetyCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EnvironmentalHealthAndSafetyCodes;

  requestBuilder(): EnvironmentalHealthAndSafetyCodesRequestBuilder<DeSerializersT> {
    return new EnvironmentalHealthAndSafetyCodesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EnvironmentalHealthAndSafetyCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EnvironmentalHealthAndSafetyCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EnvironmentalHealthAndSafetyCodes<DeSerializersT>,
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
    typeof EnvironmentalHealthAndSafetyCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EnvironmentalHealthAndSafetyCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENVIRONMENTAL_HEALTH_AND_SAFETY_CODE: OrderableEdmTypeField<
      EnvironmentalHealthAndSafetyCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENVIRONMENTAL_HEALTH_AND_SAFETY_DESCRIPTION: OrderableEdmTypeField<
      EnvironmentalHealthAndSafetyCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EnvironmentalHealthAndSafetyCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link environmentalHealthAndSafetyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENTAL_HEALTH_AND_SAFETY_CODE: fieldBuilder.buildEdmTypeField(
          'EnvironmentalHealthAndSafetyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link environmentalHealthAndSafetyDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRONMENTAL_HEALTH_AND_SAFETY_DESCRIPTION:
          fieldBuilder.buildEdmTypeField(
            'EnvironmentalHealthAndSafetyDescription',
            'Edm.String',
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EnvironmentalHealthAndSafetyCodes)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PwpVendorRetentionSettings } from './PwpVendorRetentionSettings';
import { PwpVendorRetentionSettingsRequestBuilder } from './PwpVendorRetentionSettingsRequestBuilder';
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
export class PwpVendorRetentionSettingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PwpVendorRetentionSettings<DeSerializersT>, DeSerializersT>
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
  ): PwpVendorRetentionSettingsApi<DeSerializersT> {
    return new PwpVendorRetentionSettingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PwpVendorRetentionSettings;

  requestBuilder(): PwpVendorRetentionSettingsRequestBuilder<DeSerializersT> {
    return new PwpVendorRetentionSettingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PwpVendorRetentionSettings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PwpVendorRetentionSettings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PwpVendorRetentionSettings<DeSerializersT>,
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
    typeof PwpVendorRetentionSettings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PwpVendorRetentionSettings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PwpVendorRetentionSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      PwpVendorRetentionSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_ID: OrderableEdmTypeField<
      PwpVendorRetentionSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_GROUP: OrderableEdmTypeField<
      PwpVendorRetentionSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_ID: OrderableEdmTypeField<
      PwpVendorRetentionSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PWP_THRESHOLD_PERCENT: OrderableEdmTypeField<
      PwpVendorRetentionSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PwpVendorRetentionSettings<DeSerializers>>;
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', false),
        /**
         * Static representation of the {@link vendorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ID: fieldBuilder.buildEdmTypeField(
          'VendorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_GROUP: fieldBuilder.buildEdmTypeField(
          'VendorGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_ID: fieldBuilder.buildEdmTypeField('RuleId', 'Edm.String', true),
        /**
         * Static representation of the {@link pwpThresholdPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PWP_THRESHOLD_PERCENT: fieldBuilder.buildEdmTypeField(
          'PwpThresholdPercent',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PwpVendorRetentionSettings)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorRetentionTerms } from './VendorRetentionTerms';
import { VendorRetentionTermsRequestBuilder } from './VendorRetentionTermsRequestBuilder';
import { VendorRetentionTermSchedulesApi } from './VendorRetentionTermSchedulesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class VendorRetentionTermsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorRetentionTerms<DeSerializersT>, DeSerializersT>
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
  ): VendorRetentionTermsApi<DeSerializersT> {
    return new VendorRetentionTermsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link vendorRetentionTermSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_RETENTION_TERM_SCHEDULE: OneToOneLink<
      VendorRetentionTerms<DeSerializersT>,
      DeSerializersT,
      VendorRetentionTermSchedulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [VendorRetentionTermSchedulesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VENDOR_RETENTION_TERM_SCHEDULE: new OneToOneLink(
        'VendorRetentionTermSchedule',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = VendorRetentionTerms;

  requestBuilder(): VendorRetentionTermsRequestBuilder<DeSerializersT> {
    return new VendorRetentionTermsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorRetentionTerms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorRetentionTerms<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VendorRetentionTerms<DeSerializersT>,
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
    typeof VendorRetentionTerms,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VendorRetentionTerms,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VendorRetentionTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RULE_ID: OrderableEdmTypeField<
      VendorRetentionTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      VendorRetentionTerms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorRetentionTermSchedule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_RETENTION_TERM_SCHEDULE: OneToOneLink<
      VendorRetentionTerms<DeSerializersT>,
      DeSerializersT,
      VendorRetentionTermSchedulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VendorRetentionTerms<DeSerializers>>;
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
         * Static representation of the {@link ruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_ID: fieldBuilder.buildEdmTypeField('RuleID', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', VendorRetentionTerms)
      };
    }

    return this._schema;
  }
}

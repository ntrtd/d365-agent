/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollTaxGroupCodes } from './PayrollTaxGroupCodes';
import { PayrollTaxGroupCodesRequestBuilder } from './PayrollTaxGroupCodesRequestBuilder';
import { PayrollTaxGroupsApi } from './PayrollTaxGroupsApi';
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
export class PayrollTaxGroupCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayrollTaxGroupCodes<DeSerializersT>, DeSerializersT>
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
  ): PayrollTaxGroupCodesApi<DeSerializersT> {
    return new PayrollTaxGroupCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      PayrollTaxGroupCodes<DeSerializersT>,
      DeSerializersT,
      PayrollTaxGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PayrollTaxGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TAX_GROUP: new OneToOneLink('TaxGroup', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PayrollTaxGroupCodes;

  requestBuilder(): PayrollTaxGroupCodesRequestBuilder<DeSerializersT> {
    return new PayrollTaxGroupCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayrollTaxGroupCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayrollTaxGroupCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayrollTaxGroupCodes<DeSerializersT>,
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
    typeof PayrollTaxGroupCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollTaxGroupCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TAX_GROUP_ID: OrderableEdmTypeField<
      PayrollTaxGroupCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE_ID: OrderableEdmTypeField<
      PayrollTaxGroupCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE_COUNTRY_REGION_ID: OrderableEdmTypeField<
      PayrollTaxGroupCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      PayrollTaxGroupCodes<DeSerializersT>,
      DeSerializersT,
      PayrollTaxGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollTaxGroupCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link taxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TaxGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_ID: fieldBuilder.buildEdmTypeField(
          'TaxCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxCodeCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'TaxCodeCountryRegionId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayrollTaxGroupCodes)
      };
    }

    return this._schema;
  }
}

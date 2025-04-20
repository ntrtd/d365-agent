/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxGroupDatas } from './TaxGroupDatas';
import { TaxGroupDatasRequestBuilder } from './TaxGroupDatasRequestBuilder';
import { TaxExemptCodesApi } from './TaxExemptCodesApi';
import { TaxCodesApi } from './TaxCodesApi';
import { TaxGroupsApi } from './TaxGroupsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TaxGroupDatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxGroupDatas<DeSerializersT>, DeSerializersT>
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
  ): TaxGroupDatasApi<DeSerializersT> {
    return new TaxGroupDatasApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link taxExemptCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_EXEMPT_CODE: OneToOneLink<
      TaxGroupDatas<DeSerializersT>,
      DeSerializersT,
      TaxExemptCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE: OneToOneLink<
      TaxGroupDatas<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      TaxGroupDatas<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TaxExemptCodesApi<DeSerializersT>,
      TaxCodesApi<DeSerializersT>,
      TaxGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TAX_EXEMPT_CODE: new OneToOneLink('TaxExemptCode', this, linkedApis[0]),
      TAX_CODE: new OneToOneLink('TaxCode', this, linkedApis[1]),
      TAX_GROUP: new OneToOneLink('TaxGroup', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = TaxGroupDatas;

  requestBuilder(): TaxGroupDatasRequestBuilder<DeSerializersT> {
    return new TaxGroupDatasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxGroupDatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxGroupDatas<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TaxGroupDatas<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TaxGroupDatas, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TaxGroupDatas, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxGroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_GROUP_ID: OrderableEdmTypeField<
      TaxGroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_CODE_ID: OrderableEdmTypeField<
      TaxGroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USE_TAX: EnumField<
      TaxGroupDatas<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_EXEMPT_CODE_ID: OrderableEdmTypeField<
      TaxGroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTRACOM_VAT: EnumField<
      TaxGroupDatas<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REVERSE_CHARGE: EnumField<
      TaxGroupDatas<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BRAZILIAN_TAXATION_CODE: OrderableEdmTypeField<
      TaxGroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXEMPT_TAX: EnumField<
      TaxGroupDatas<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxExemptCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_EXEMPT_CODE: OneToOneLink<
      TaxGroupDatas<DeSerializersT>,
      DeSerializersT,
      TaxExemptCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE: OneToOneLink<
      TaxGroupDatas<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link taxGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_GROUP: OneToOneLink<
      TaxGroupDatas<DeSerializersT>,
      DeSerializersT,
      TaxGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxGroupDatas<DeSerializers>>;
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
         * Static representation of the {@link useTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_TAX: fieldBuilder.buildEnumField('UseTax', NoYes, true),
        /**
         * Static representation of the {@link taxExemptCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_CODE_ID: fieldBuilder.buildEdmTypeField(
          'TaxExemptCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intracomVat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTRACOM_VAT: fieldBuilder.buildEnumField('IntracomVAT', NoYes, true),
        /**
         * Static representation of the {@link reverseCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSE_CHARGE: fieldBuilder.buildEnumField(
          'ReverseCharge',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link brazilianTaxationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRAZILIAN_TAXATION_CODE: fieldBuilder.buildEdmTypeField(
          'BrazilianTaxationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exemptTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT_TAX: fieldBuilder.buildEnumField('ExemptTax', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxGroupDatas)
      };
    }

    return this._schema;
  }
}

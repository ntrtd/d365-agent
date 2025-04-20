/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdingGroups } from './WithholdingGroups';
import { WithholdingGroupsRequestBuilder } from './WithholdingGroupsRequestBuilder';
import { WithholdingGroupDatasApi } from './WithholdingGroupDatasApi';
import { NoYes } from './NoYes';
import { TaxWithholdCodeTypeIn } from './TaxWithholdCodeTypeIn';
import { TaxWithholdTaxApplicabilityIn } from './TaxWithholdTaxApplicabilityIn';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WithholdingGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdingGroups<DeSerializersT>, DeSerializersT>
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
  ): WithholdingGroupsApi<DeSerializersT> {
    return new WithholdingGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link withholdingGroupData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_GROUP_DATA: OneToManyLink<
      WithholdingGroups<DeSerializersT>,
      DeSerializersT,
      WithholdingGroupDatasApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WithholdingGroupDatasApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WITHHOLDING_GROUP_DATA: new OneToManyLink(
        'WithholdingGroupData',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WithholdingGroups;

  requestBuilder(): WithholdingGroupsRequestBuilder<DeSerializersT> {
    return new WithholdingGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdingGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdingGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WithholdingGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof WithholdingGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdingGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdingGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WITHHOLDING_TAX_GROUP_CODE: OrderableEdmTypeField<
      WithholdingGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXCLUDE_CHARGES: EnumField<
      WithholdingGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_TYPE: EnumField<
      WithholdingGroups<DeSerializers>,
      DeSerializersT,
      TaxWithholdCodeTypeIn,
      true,
      true
    >;
    APPLICABLE_TAX_RATES: EnumField<
      WithholdingGroups<DeSerializers>,
      DeSerializersT,
      TaxWithholdTaxApplicabilityIn,
      true,
      true
    >;
    TRANSPORTER: EnumField<
      WithholdingGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WithholdingGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingGroupData} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_GROUP_DATA: OneToManyLink<
      WithholdingGroups<DeSerializersT>,
      DeSerializersT,
      WithholdingGroupDatasApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WithholdingGroups<DeSerializers>>;
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
         * Static representation of the {@link withholdingTaxGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxGroupCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link excludeCharges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDE_CHARGES: fieldBuilder.buildEnumField(
          'ExcludeCharges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField(
          'TaxType',
          TaxWithholdCodeTypeIn,
          true
        ),
        /**
         * Static representation of the {@link applicableTaxRates} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICABLE_TAX_RATES: fieldBuilder.buildEnumField(
          'ApplicableTaxRates',
          TaxWithholdTaxApplicabilityIn,
          true
        ),
        /**
         * Static representation of the {@link transporter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTER: fieldBuilder.buildEnumField('Transporter', NoYes, true),
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
        ALL_FIELDS: new AllFields('*', WithholdingGroups)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdReportingCodes } from './WithholdReportingCodes';
import { WithholdReportingCodesRequestBuilder } from './WithholdReportingCodesRequestBuilder';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';
import { TaxWithholdReportingCodeIn } from './TaxWithholdReportingCodeIn';
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
export class WithholdReportingCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdReportingCodes<DeSerializersT>, DeSerializersT>
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
  ): WithholdReportingCodesApi<DeSerializersT> {
    return new WithholdReportingCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdReportingCodes;

  requestBuilder(): WithholdReportingCodesRequestBuilder<DeSerializersT> {
    return new WithholdReportingCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdReportingCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WithholdReportingCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdReportingCodes<DeSerializersT>,
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
    typeof WithholdReportingCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdReportingCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdReportingCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_TYPE: EnumField<
      WithholdReportingCodes<DeSerializers>,
      DeSerializersT,
      TaxWithholdTypeIn,
      true,
      true
    >;
    WITHHOLDING_TAX_COMPONENT: OrderableEdmTypeField<
      WithholdReportingCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WITHHOLDING_TAX_COMPONENT_GROUP: OrderableEdmTypeField<
      WithholdReportingCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORTING_CODE: EnumField<
      WithholdReportingCodes<DeSerializers>,
      DeSerializersT,
      TaxWithholdReportingCodeIn,
      true,
      true
    >;
    COMPONENT_GROUP_FOR_COMPONENT: OrderableEdmTypeField<
      WithholdReportingCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WithholdReportingCodes<DeSerializers>>;
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
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField(
          'TaxType',
          TaxWithholdTypeIn,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_COMPONENT: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxComponent',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link withholdingTaxComponentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_COMPONENT_GROUP: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxComponentGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reportingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTING_CODE: fieldBuilder.buildEnumField(
          'ReportingCode',
          TaxWithholdReportingCodeIn,
          true
        ),
        /**
         * Static representation of the {@link componentGroupForComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPONENT_GROUP_FOR_COMPONENT: fieldBuilder.buildEdmTypeField(
          'ComponentGroupForComponent',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdReportingCodes)
      };
    }

    return this._schema;
  }
}

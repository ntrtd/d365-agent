/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxReportingCodeEntities } from './TaxReportingCodeEntities';
import { TaxReportingCodeEntitiesRequestBuilder } from './TaxReportingCodeEntitiesRequestBuilder';
import { TaxCodesApi } from './TaxCodesApi';
import { TaxReportLayout } from './TaxReportLayout';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TaxReportingCodeEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxReportingCodeEntities<DeSerializersT>, DeSerializersT>
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
  ): TaxReportingCodeEntitiesApi<DeSerializersT> {
    return new TaxReportingCodeEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link taxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE: OneToManyLink<
      TaxReportingCodeEntities<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [TaxCodesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      TAX_CODE: new OneToManyLink('TaxCode', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = TaxReportingCodeEntities;

  requestBuilder(): TaxReportingCodeEntitiesRequestBuilder<DeSerializersT> {
    return new TaxReportingCodeEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxReportingCodeEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxReportingCodeEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxReportingCodeEntities<DeSerializersT>,
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
    typeof TaxReportingCodeEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxReportingCodeEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxReportingCodeEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_REPORTING_CODE: OrderableEdmTypeField<
      TaxReportingCodeEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPORT_LAYOUT: EnumField<
      TaxReportingCodeEntities<DeSerializers>,
      DeSerializersT,
      TaxReportLayout,
      true,
      true
    >;
    REPORT_TEXT: OrderableEdmTypeField<
      TaxReportingCodeEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxReportingCodeEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_TAX_CORRECTIONS: EnumField<
      TaxReportingCodeEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link taxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TAX_CODE: OneToManyLink<
      TaxReportingCodeEntities<DeSerializersT>,
      DeSerializersT,
      TaxCodesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TaxReportingCodeEntities<DeSerializers>>;
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
         * Static representation of the {@link taxReportingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORTING_CODE: fieldBuilder.buildEdmTypeField(
          'TaxReportingCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reportLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_LAYOUT: fieldBuilder.buildEnumField(
          'ReportLayout',
          TaxReportLayout,
          true
        ),
        /**
         * Static representation of the {@link reportText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_TEXT: fieldBuilder.buildEdmTypeField(
          'ReportText',
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
         * Static representation of the {@link salesTaxCorrections} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TAX_CORRECTIONS: fieldBuilder.buildEnumField(
          'SalesTaxCorrections',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxReportingCodeEntities)
      };
    }

    return this._schema;
  }
}

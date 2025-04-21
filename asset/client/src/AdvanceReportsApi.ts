/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdvanceReports } from './AdvanceReports';
import { AdvanceReportsRequestBuilder } from './AdvanceReportsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { NoYes } from './NoYes';
import { EmplAdvStatusRu } from './EmplAdvStatusRu';
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
export class AdvanceReportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AdvanceReports<DeSerializersT>, DeSerializersT>
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
  ): AdvanceReportsApi<DeSerializersT> {
    return new AdvanceReportsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      AdvanceReports<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = AdvanceReports;

  requestBuilder(): AdvanceReportsRequestBuilder<DeSerializersT> {
    return new AdvanceReportsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AdvanceReports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AdvanceReports<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AdvanceReports<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AdvanceReports, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AdvanceReports, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADVANCE_REPORT_ID: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_FULLY_FACTURED: EnumField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ADVANCE_PURPOSE: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECKING_DATE: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FIRMING_DATE: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADVANCE_STATUS: EnumField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      EmplAdvStatusRu,
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ADVANCE_HOLDER: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFICIAL_SESSION: OrderableEdmTypeField<
      AdvanceReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      AdvanceReports<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AdvanceReports<DeSerializers>>;
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
         * Static representation of the {@link advanceReportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_REPORT_ID: fieldBuilder.buildEdmTypeField(
          'AdvanceReportId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isFullyFactured} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FULLY_FACTURED: fieldBuilder.buildEnumField(
          'IsFullyFactured',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link advancePurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_PURPOSE: fieldBuilder.buildEdmTypeField(
          'AdvancePurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKING_DATE: fieldBuilder.buildEdmTypeField(
          'CheckingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link firmingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRMING_DATE: fieldBuilder.buildEdmTypeField(
          'FirmingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link advanceStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_STATUS: fieldBuilder.buildEnumField(
          'AdvanceStatus',
          EmplAdvStatusRu,
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
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link advanceHolder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADVANCE_HOLDER: fieldBuilder.buildEdmTypeField(
          'AdvanceHolder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link officialSession} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICIAL_SESSION: fieldBuilder.buildEdmTypeField(
          'OfficialSession',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AdvanceReports)
      };
    }

    return this._schema;
  }
}

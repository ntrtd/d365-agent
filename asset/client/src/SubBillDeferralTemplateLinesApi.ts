/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralTemplateLines } from './SubBillDeferralTemplateLines';
import { SubBillDeferralTemplateLinesRequestBuilder } from './SubBillDeferralTemplateLinesRequestBuilder';
import { SubBillDeferralTemplateTablesApi } from './SubBillDeferralTemplateTablesApi';
import { SubBillDeferralPeriodType } from './SubBillDeferralPeriodType';
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
export class SubBillDeferralTemplateLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralTemplateLines<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralTemplateLinesApi<DeSerializersT> {
    return new SubBillDeferralTemplateLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralTemplateTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_TEMPLATE_TABLE_ENTITY: OneToOneLink<
      SubBillDeferralTemplateLines<DeSerializersT>,
      DeSerializersT,
      SubBillDeferralTemplateTablesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillDeferralTemplateTablesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SUB_BILL_DEFERRAL_TEMPLATE_TABLE_ENTITY: new OneToOneLink(
        'SubBillDeferralTemplateTableEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillDeferralTemplateLines;

  requestBuilder(): SubBillDeferralTemplateLinesRequestBuilder<DeSerializersT> {
    return new SubBillDeferralTemplateLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralTemplateLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralTemplateLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralTemplateLines<DeSerializersT>,
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
    typeof SubBillDeferralTemplateLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralTemplateLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEMPLATE: OrderableEdmTypeField<
      SubBillDeferralTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillDeferralTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIOD_TYPE: EnumField<
      SubBillDeferralTemplateLines<DeSerializers>,
      DeSerializersT,
      SubBillDeferralPeriodType,
      true,
      true
    >;
    LENGTH: OrderableEdmTypeField<
      SubBillDeferralTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralTemplateTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_TEMPLATE_TABLE_ENTITY: OneToOneLink<
      SubBillDeferralTemplateLines<DeSerializersT>,
      DeSerializersT,
      SubBillDeferralTemplateTablesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillDeferralTemplateLines<DeSerializers>>;
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
         * Static representation of the {@link template} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE: fieldBuilder.buildEdmTypeField(
          'Template',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link periodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_TYPE: fieldBuilder.buildEnumField(
          'PeriodType',
          SubBillDeferralPeriodType,
          true
        ),
        /**
         * Static representation of the {@link length} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH: fieldBuilder.buildEdmTypeField('Length', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralTemplateLines)
      };
    }

    return this._schema;
  }
}

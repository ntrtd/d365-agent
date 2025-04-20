/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralEventTemplateLines } from './SubBillDeferralEventTemplateLines';
import { SubBillDeferralEventTemplateLinesRequestBuilder } from './SubBillDeferralEventTemplateLinesRequestBuilder';
import { SubBillDeferralEventTemplateTablesApi } from './SubBillDeferralEventTemplateTablesApi';
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
export class SubBillDeferralEventTemplateLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralEventTemplateLines<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralEventTemplateLinesApi<DeSerializersT> {
    return new SubBillDeferralEventTemplateLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralEventTemplateTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_EVENT_TEMPLATE_TABLE_ENTITY: OneToOneLink<
      SubBillDeferralEventTemplateLines<DeSerializersT>,
      DeSerializersT,
      SubBillDeferralEventTemplateTablesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillDeferralEventTemplateTablesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SUB_BILL_DEFERRAL_EVENT_TEMPLATE_TABLE_ENTITY: new OneToOneLink(
        'SubBillDeferralEventTemplateTableEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillDeferralEventTemplateLines;

  requestBuilder(): SubBillDeferralEventTemplateLinesRequestBuilder<DeSerializersT> {
    return new SubBillDeferralEventTemplateLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralEventTemplateLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralEventTemplateLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralEventTemplateLines<DeSerializersT>,
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
    typeof SubBillDeferralEventTemplateLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralEventTemplateLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralEventTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEMPLATE: OrderableEdmTypeField<
      SubBillDeferralEventTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      SubBillDeferralEventTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillDeferralEventTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECOGNITION_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralEventTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MONTHS_TO_EXPIRATION: OrderableEdmTypeField<
      SubBillDeferralEventTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RECOGNIZE_ON_POST: EnumField<
      SubBillDeferralEventTemplateLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOCATION_PERCENTAGE: OrderableEdmTypeField<
      SubBillDeferralEventTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link subBillDeferralEventTemplateTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUB_BILL_DEFERRAL_EVENT_TEMPLATE_TABLE_ENTITY: OneToOneLink<
      SubBillDeferralEventTemplateLines<DeSerializersT>,
      DeSerializersT,
      SubBillDeferralEventTemplateTablesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillDeferralEventTemplateLines<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link recognitionAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'RecognitionAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link monthsToExpiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS_TO_EXPIRATION: fieldBuilder.buildEdmTypeField(
          'MonthsToExpiration',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link recognizeOnPost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNIZE_ON_POST: fieldBuilder.buildEnumField(
          'RecognizeOnPost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allocationPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AllocationPercentage',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralEventTemplateLines)
      };
    }

    return this._schema;
  }
}

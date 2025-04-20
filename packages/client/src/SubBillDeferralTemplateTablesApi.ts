/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralTemplateTables } from './SubBillDeferralTemplateTables';
import { SubBillDeferralTemplateTablesRequestBuilder } from './SubBillDeferralTemplateTablesRequestBuilder';
import { SubBillDeferralTemplateLinesApi } from './SubBillDeferralTemplateLinesApi';
import { SubBillDeferralPeriodFrequency } from './SubBillDeferralPeriodFrequency';
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
export class SubBillDeferralTemplateTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralTemplateTables<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralTemplateTablesApi<DeSerializersT> {
    return new SubBillDeferralTemplateTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillDeferralTemplateTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_DEFERRAL_TEMPLATE_TABLE_ENTITY: OneToManyLink<
      SubBillDeferralTemplateTables<DeSerializersT>,
      DeSerializersT,
      SubBillDeferralTemplateLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillDeferralTemplateLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELATED_TO_SUB_BILL_DEFERRAL_TEMPLATE_TABLE_ENTITY: new OneToManyLink(
        'RelatedToSubBillDeferralTemplateTableEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SubBillDeferralTemplateTables;

  requestBuilder(): SubBillDeferralTemplateTablesRequestBuilder<DeSerializersT> {
    return new SubBillDeferralTemplateTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralTemplateTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralTemplateTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralTemplateTables<DeSerializersT>,
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
    typeof SubBillDeferralTemplateTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralTemplateTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralTemplateTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEMPLATE: OrderableEdmTypeField<
      SubBillDeferralTemplateTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_FREQUENCY: EnumField<
      SubBillDeferralTemplateTables<DeSerializers>,
      DeSerializersT,
      SubBillDeferralPeriodFrequency,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillDeferralTemplateTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillDeferralTemplateTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_DEFERRAL_TEMPLATE_TABLE_ENTITY: OneToManyLink<
      SubBillDeferralTemplateTables<DeSerializersT>,
      DeSerializersT,
      SubBillDeferralTemplateLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillDeferralTemplateTables<DeSerializers>>;
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
         * Static representation of the {@link periodFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_FREQUENCY: fieldBuilder.buildEnumField(
          'PeriodFrequency',
          SubBillDeferralPeriodFrequency,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralTemplateTables)
      };
    }

    return this._schema;
  }
}

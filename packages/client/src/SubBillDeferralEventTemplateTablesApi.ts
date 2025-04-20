/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralEventTemplateTables } from './SubBillDeferralEventTemplateTables';
import { SubBillDeferralEventTemplateTablesRequestBuilder } from './SubBillDeferralEventTemplateTablesRequestBuilder';
import { SubBillDeferralEventTemplateLinesApi } from './SubBillDeferralEventTemplateLinesApi';
import { NoYes } from './NoYes';
import { SubBillDeferralEventAllocationType } from './SubBillDeferralEventAllocationType';
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
export class SubBillDeferralEventTemplateTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillDeferralEventTemplateTables<DeSerializersT>,
      DeSerializersT
    >
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
  ): SubBillDeferralEventTemplateTablesApi<DeSerializersT> {
    return new SubBillDeferralEventTemplateTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillDeferralEventTemplateTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_DEFERRAL_EVENT_TEMPLATE_TABLE_ENTITY: OneToManyLink<
      SubBillDeferralEventTemplateTables<DeSerializersT>,
      DeSerializersT,
      SubBillDeferralEventTemplateLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SubBillDeferralEventTemplateLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RELATED_TO_SUB_BILL_DEFERRAL_EVENT_TEMPLATE_TABLE_ENTITY:
        new OneToManyLink(
          'RelatedToSubBillDeferralEventTemplateTableEntity',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = SubBillDeferralEventTemplateTables;

  requestBuilder(): SubBillDeferralEventTemplateTablesRequestBuilder<DeSerializersT> {
    return new SubBillDeferralEventTemplateTablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralEventTemplateTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralEventTemplateTables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralEventTemplateTables<DeSerializersT>,
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
    typeof SubBillDeferralEventTemplateTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralEventTemplateTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralEventTemplateTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEMPLATE: OrderableEdmTypeField<
      SubBillDeferralEventTemplateTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      SubBillDeferralEventTemplateTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillDeferralEventTemplateTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEPARATE_EVENTS_PER_UNIT: EnumField<
      SubBillDeferralEventTemplateTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOCATION_TYPE: EnumField<
      SubBillDeferralEventTemplateTables<DeSerializers>,
      DeSerializersT,
      SubBillDeferralEventAllocationType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link relatedToSubBillDeferralEventTemplateTableEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELATED_TO_SUB_BILL_DEFERRAL_EVENT_TEMPLATE_TABLE_ENTITY: OneToManyLink<
      SubBillDeferralEventTemplateTables<DeSerializersT>,
      DeSerializersT,
      SubBillDeferralEventTemplateLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SubBillDeferralEventTemplateTables<DeSerializers>>;
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
         * Static representation of the {@link expirationAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'ExpirationAccountDisplayValue',
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
         * Static representation of the {@link separateEventsPerUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEPARATE_EVENTS_PER_UNIT: fieldBuilder.buildEnumField(
          'SeparateEventsPerUnit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allocationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_TYPE: fieldBuilder.buildEnumField(
          'AllocationType',
          SubBillDeferralEventAllocationType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralEventTemplateTables)
      };
    }

    return this._schema;
  }
}

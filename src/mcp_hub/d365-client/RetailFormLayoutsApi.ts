/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailFormLayouts } from './RetailFormLayouts';
import { RetailFormLayoutsRequestBuilder } from './RetailFormLayoutsRequestBuilder';
import { RetailPrintBehaviourBase } from './RetailPrintBehaviourBase';
import { NoYes } from './NoYes';
import { RetailReceipt } from './RetailReceipt';
import { RetailEmailBehaviorBase } from './RetailEmailBehaviorBase';
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
export class RetailFormLayoutsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailFormLayouts<DeSerializersT>, DeSerializersT>
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
  ): RetailFormLayoutsApi<DeSerializersT> {
    return new RetailFormLayoutsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailFormLayouts;

  requestBuilder(): RetailFormLayoutsRequestBuilder<DeSerializersT> {
    return new RetailFormLayoutsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailFormLayouts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailFormLayouts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailFormLayouts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailFormLayouts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailFormLayouts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FORM_LAYOUT_ID: OrderableEdmTypeField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_BEHAVIOUR: EnumField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      RetailPrintBehaviourBase,
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINES_XML: OrderableEdmTypeField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROMPT_QUESTION: EnumField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAYOUT_TYPE: EnumField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      RetailReceipt,
      true,
      true
    >;
    FOOTER_XML: OrderableEdmTypeField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPPER_CASE: EnumField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMAIL_BEHAVIOR: EnumField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      RetailEmailBehaviorBase,
      true,
      true
    >;
    PRINT_AS_SLIP: EnumField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER_XML: OrderableEdmTypeField<
      RetailFormLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailFormLayouts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link formLayoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'FormLayoutId',
          'Edm.String',
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
         * Static representation of the {@link printBehaviour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_BEHAVIOUR: fieldBuilder.buildEnumField(
          'printBehaviour',
          RetailPrintBehaviourBase,
          true
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link linesXml} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINES_XML: fieldBuilder.buildEdmTypeField(
          'linesXML',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link promptQuestion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMPT_QUESTION: fieldBuilder.buildEnumField(
          'PromptQuestion',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link layoutType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_TYPE: fieldBuilder.buildEnumField(
          'LayoutType',
          RetailReceipt,
          true
        ),
        /**
         * Static representation of the {@link footerXml} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOOTER_XML: fieldBuilder.buildEdmTypeField(
          'footerXML',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link upperCase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPPER_CASE: fieldBuilder.buildEnumField('UpperCase', NoYes, true),
        /**
         * Static representation of the {@link emailBehavior} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_BEHAVIOR: fieldBuilder.buildEnumField(
          'EmailBehavior',
          RetailEmailBehaviorBase,
          true
        ),
        /**
         * Static representation of the {@link printAsSlip} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_AS_SLIP: fieldBuilder.buildEnumField('PrintAsSlip', NoYes, true),
        /**
         * Static representation of the {@link headerXml} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_XML: fieldBuilder.buildEdmTypeField(
          'headerXML',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailFormLayouts)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SrsFinanceCopilots } from './SrsFinanceCopilots';
import { SrsFinanceCopilotsRequestBuilder } from './SrsFinanceCopilotsRequestBuilder';
import { MenuItemType } from './MenuItemType';
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
export class SrsFinanceCopilotsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SrsFinanceCopilots<DeSerializersT>, DeSerializersT>
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
  ): SrsFinanceCopilotsApi<DeSerializersT> {
    return new SrsFinanceCopilotsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SrsFinanceCopilots;

  requestBuilder(): SrsFinanceCopilotsRequestBuilder<DeSerializersT> {
    return new SrsFinanceCopilotsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SrsFinanceCopilots<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SrsFinanceCopilots<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SrsFinanceCopilots<DeSerializersT>,
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
    typeof SrsFinanceCopilots,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SrsFinanceCopilots,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SrsFinanceCopilots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORT_MENU_ITEM_NAME: OrderableEdmTypeField<
      SrsFinanceCopilots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORT_DESIGN_NAME: OrderableEdmTypeField<
      SrsFinanceCopilots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_NAME: OrderableEdmTypeField<
      SrsFinanceCopilots<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_MENU_ITEM_TYPE: EnumField<
      SrsFinanceCopilots<DeSerializers>,
      DeSerializersT,
      MenuItemType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SrsFinanceCopilots<DeSerializers>>;
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
         * Static representation of the {@link reportMenuItemName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_MENU_ITEM_NAME: fieldBuilder.buildEdmTypeField(
          'ReportMenuItemName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reportDesignName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_DESIGN_NAME: fieldBuilder.buildEdmTypeField(
          'ReportDesignName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_NAME: fieldBuilder.buildEdmTypeField(
          'ReportName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportMenuItemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_MENU_ITEM_TYPE: fieldBuilder.buildEnumField(
          'ReportMenuItemType',
          MenuItemType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SrsFinanceCopilots)
      };
    }

    return this._schema;
  }
}

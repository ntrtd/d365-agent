/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashFlowMgmtJourNameBalanceControls } from './CashFlowMgmtJourNameBalanceControls';
import { CashFlowMgmtJourNameBalanceControlsRequestBuilder } from './CashFlowMgmtJourNameBalanceControlsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class CashFlowMgmtJourNameBalanceControlsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CashFlowMgmtJourNameBalanceControls<DeSerializersT>,
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
  ): CashFlowMgmtJourNameBalanceControlsApi<DeSerializersT> {
    return new CashFlowMgmtJourNameBalanceControlsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CashFlowMgmtJourNameBalanceControls;

  requestBuilder(): CashFlowMgmtJourNameBalanceControlsRequestBuilder<DeSerializersT> {
    return new CashFlowMgmtJourNameBalanceControlsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CashFlowMgmtJourNameBalanceControls<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CashFlowMgmtJourNameBalanceControls<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CashFlowMgmtJourNameBalanceControls<DeSerializersT>,
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
    typeof CashFlowMgmtJourNameBalanceControls,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CashFlowMgmtJourNameBalanceControls,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      CashFlowMgmtJourNameBalanceControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      CashFlowMgmtJourNameBalanceControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MINIMUM_CASH_BALANCE: OrderableEdmTypeField<
      CashFlowMgmtJourNameBalanceControls<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CashFlowMgmtJourNameBalanceControls<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link minimumCashBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_CASH_BALANCE: fieldBuilder.buildEdmTypeField(
          'MinimumCashBalance',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CashFlowMgmtJourNameBalanceControls)
      };
    }

    return this._schema;
  }
}

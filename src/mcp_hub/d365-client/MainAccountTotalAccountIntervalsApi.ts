/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MainAccountTotalAccountIntervals } from './MainAccountTotalAccountIntervals';
import { MainAccountTotalAccountIntervalsRequestBuilder } from './MainAccountTotalAccountIntervalsRequestBuilder';
import { ChartOfAccountsApi } from './ChartOfAccountsApi';
import { MainAccountsApi } from './MainAccountsApi';
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
export class MainAccountTotalAccountIntervalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MainAccountTotalAccountIntervals<DeSerializersT>, DeSerializersT>
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
  ): MainAccountTotalAccountIntervalsApi<DeSerializersT> {
    return new MainAccountTotalAccountIntervalsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link totalAccountLedgerChartOfAccountsEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_ACCOUNT_LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: OneToOneLink<
      MainAccountTotalAccountIntervals<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link totalAccountMainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_ACCOUNT_MAIN_ACCOUNT_ENTITY_ROLE: OneToOneLink<
      MainAccountTotalAccountIntervals<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ChartOfAccountsApi<DeSerializersT>,
      MainAccountsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TOTAL_ACCOUNT_LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: new OneToOneLink(
        'TotalAccountLedgerChartOfAccountsEntityRole',
        this,
        linkedApis[0]
      ),
      TOTAL_ACCOUNT_MAIN_ACCOUNT_ENTITY_ROLE: new OneToOneLink(
        'TotalAccountMainAccountEntityRole',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = MainAccountTotalAccountIntervals;

  requestBuilder(): MainAccountTotalAccountIntervalsRequestBuilder<DeSerializersT> {
    return new MainAccountTotalAccountIntervalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MainAccountTotalAccountIntervals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MainAccountTotalAccountIntervals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MainAccountTotalAccountIntervals<DeSerializersT>,
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
    typeof MainAccountTotalAccountIntervals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MainAccountTotalAccountIntervals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      MainAccountTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHART_OF_ACCOUNTS: OrderableEdmTypeField<
      MainAccountTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_VALUE: OrderableEdmTypeField<
      MainAccountTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_VALUE: OrderableEdmTypeField<
      MainAccountTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVERT_TOTAL_SIGN: EnumField<
      MainAccountTotalAccountIntervals<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link totalAccountLedgerChartOfAccountsEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_ACCOUNT_LEDGER_CHART_OF_ACCOUNTS_ENTITY_ROLE: OneToOneLink<
      MainAccountTotalAccountIntervals<DeSerializersT>,
      DeSerializersT,
      ChartOfAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link totalAccountMainAccountEntityRole} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TOTAL_ACCOUNT_MAIN_ACCOUNT_ENTITY_ROLE: OneToOneLink<
      MainAccountTotalAccountIntervals<DeSerializersT>,
      DeSerializersT,
      MainAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MainAccountTotalAccountIntervals<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link mainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chartOfAccounts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHART_OF_ACCOUNTS: fieldBuilder.buildEdmTypeField(
          'ChartOfAccounts',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_VALUE: fieldBuilder.buildEdmTypeField(
          'FromValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_VALUE: fieldBuilder.buildEdmTypeField(
          'ToValue',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link invertTotalSign} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVERT_TOTAL_SIGN: fieldBuilder.buildEnumField(
          'InvertTotalSign',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MainAccountTotalAccountIntervals)
      };
    }

    return this._schema;
  }
}

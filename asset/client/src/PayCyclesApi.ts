/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayCycles } from './PayCycles';
import { PayCyclesRequestBuilder } from './PayCyclesRequestBuilder';
import { PayStatementHeadersApi } from './PayStatementHeadersApi';
import { PayrollPositionDetailsApi } from './PayrollPositionDetailsApi';
import { PayPeriodsApi } from './PayPeriodsApi';
import { PositionsApi } from './PositionsApi';
import { PositionsV2Api } from './PositionsV2Api';
import { PayrollTimePeriod } from './PayrollTimePeriod';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PayCyclesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayCycles<DeSerializersT>, DeSerializersT>
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
  ): PayCyclesApi<DeSerializersT> {
    return new PayCyclesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payStatement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT: OneToManyLink<
      PayCycles<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPositionDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION_DETAIL: OneToOneLink<
      PayCycles<DeSerializersT>,
      DeSerializersT,
      PayrollPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_PERIOD: OneToManyLink<
      PayCycles<DeSerializersT>,
      DeSerializersT,
      PayPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      PayCycles<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      PayCycles<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayStatementHeadersApi<DeSerializersT>,
      PayrollPositionDetailsApi<DeSerializersT>,
      PayPeriodsApi<DeSerializersT>,
      PositionsApi<DeSerializersT>,
      PositionsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAY_STATEMENT: new OneToManyLink('PayStatement', this, linkedApis[0]),
      PAYROLL_POSITION_DETAIL: new OneToOneLink(
        'PayrollPositionDetail',
        this,
        linkedApis[1]
      ),
      PAY_PERIOD: new OneToManyLink('PayPeriod', this, linkedApis[2]),
      POSITIONS: new OneToManyLink('Positions', this, linkedApis[3]),
      POSITIONS_V_2: new OneToManyLink('PositionsV2', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = PayCycles;

  requestBuilder(): PayCyclesRequestBuilder<DeSerializersT> {
    return new PayCyclesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayCycles<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayCycles<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PayCycles<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PayCycles, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PayCycles, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PayCycles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayCycles<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_CYCLE_FREQUENCY: EnumField<
      PayCycles<DeSerializers>,
      DeSerializersT,
      PayrollTimePeriod,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payStatement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT: OneToManyLink<
      PayCycles<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPositionDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION_DETAIL: OneToOneLink<
      PayCycles<DeSerializersT>,
      DeSerializersT,
      PayrollPositionDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payPeriod} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_PERIOD: OneToManyLink<
      PayCycles<DeSerializersT>,
      DeSerializersT,
      PayPeriodsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      PayCycles<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS_V_2: OneToManyLink<
      PayCycles<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayCycles<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link payCycleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_CYCLE_ID: fieldBuilder.buildEdmTypeField(
          'PayCycleId',
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
         * Static representation of the {@link payCycleFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_CYCLE_FREQUENCY: fieldBuilder.buildEnumField(
          'PayCycleFrequency',
          PayrollTimePeriod,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayCycles)
      };
    }

    return this._schema;
  }
}

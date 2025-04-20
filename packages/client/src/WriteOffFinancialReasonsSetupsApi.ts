/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WriteOffFinancialReasonsSetups } from './WriteOffFinancialReasonsSetups';
import { WriteOffFinancialReasonsSetupsRequestBuilder } from './WriteOffFinancialReasonsSetupsRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CustomersV3Api } from './CustomersV3Api';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WriteOffFinancialReasonsSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WriteOffFinancialReasonsSetups<DeSerializersT>, DeSerializersT>
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
  ): WriteOffFinancialReasonsSetupsApi<DeSerializersT> {
    return new WriteOffFinancialReasonsSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      WriteOffFinancialReasonsSetups<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToManyLink<
      WriteOffFinancialReasonsSetups<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      CUSTOMER_V_3: new OneToManyLink('CustomerV3', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = WriteOffFinancialReasonsSetups;

  requestBuilder(): WriteOffFinancialReasonsSetupsRequestBuilder<DeSerializersT> {
    return new WriteOffFinancialReasonsSetupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WriteOffFinancialReasonsSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WriteOffFinancialReasonsSetups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WriteOffFinancialReasonsSetups<DeSerializersT>,
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
    typeof WriteOffFinancialReasonsSetups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WriteOffFinancialReasonsSetups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMPANY: OrderableEdmTypeField<
      WriteOffFinancialReasonsSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WRITE_OFF_REASON: OrderableEdmTypeField<
      WriteOffFinancialReasonsSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WRITE_OFF_DESCRIPTION: OrderableEdmTypeField<
      WriteOffFinancialReasonsSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WRITE_OFF_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      WriteOffFinancialReasonsSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT: EnumField<
      WriteOffFinancialReasonsSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      WriteOffFinancialReasonsSetups<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToManyLink<
      WriteOffFinancialReasonsSetups<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WriteOffFinancialReasonsSetups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', false),
        /**
         * Static representation of the {@link writeOffReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITE_OFF_REASON: fieldBuilder.buildEdmTypeField(
          'WriteOffReason',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link writeOffDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITE_OFF_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'WriteOffDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link writeOffLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITE_OFF_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'WriteOffLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT: fieldBuilder.buildEnumField('IsDefault', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WriteOffFinancialReasonsSetups)
      };
    }

    return this._schema;
  }
}

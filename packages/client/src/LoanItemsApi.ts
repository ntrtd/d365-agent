/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LoanItems } from './LoanItems';
import { LoanItemsRequestBuilder } from './LoanItemsRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { LoanTypesApi } from './LoanTypesApi';
import { LoanedEquipmentsApi } from './LoanedEquipmentsApi';
import { HrmLoanItemTax } from './HrmLoanItemTax';
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
export class LoanItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LoanItems<DeSerializersT>, DeSerializersT>
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
  ): LoanItemsApi<DeSerializersT> {
    return new LoanItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LoanItems<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link loanType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAN_TYPE: OneToOneLink<
      LoanItems<DeSerializersT>,
      DeSerializersT,
      LoanTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loanedEquipments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOANED_EQUIPMENTS: OneToManyLink<
      LoanItems<DeSerializersT>,
      DeSerializersT,
      LoanedEquipmentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      LoanTypesApi<DeSerializersT>,
      LoanedEquipmentsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      LOAN_TYPE: new OneToOneLink('LoanType', this, linkedApis[1]),
      LOANED_EQUIPMENTS: new OneToManyLink(
        'LoanedEquipments',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = LoanItems;

  requestBuilder(): LoanItemsRequestBuilder<DeSerializersT> {
    return new LoanItemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LoanItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LoanItems<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LoanItems<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LoanItems, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LoanItems, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOAN_ITEM_ID: OrderableEdmTypeField<
      LoanItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LoanItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      LoanItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_IN_CHARGE: OrderableEdmTypeField<
      LoanItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GRACE_PERIOD_DAYS: OrderableEdmTypeField<
      LoanItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_REPORTING: EnumField<
      LoanItems<DeSerializers>,
      DeSerializersT,
      HrmLoanItemTax,
      true,
      true
    >;
    LOAN_DAYS: OrderableEdmTypeField<
      LoanItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOAN_TYPE_ID: OrderableEdmTypeField<
      LoanItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      LoanItems<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link loanType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAN_TYPE: OneToOneLink<
      LoanItems<DeSerializersT>,
      DeSerializersT,
      LoanTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loanedEquipments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOANED_EQUIPMENTS: OneToManyLink<
      LoanItems<DeSerializersT>,
      DeSerializersT,
      LoanedEquipmentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LoanItems<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link loanItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAN_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'LoanItemId',
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
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personInCharge} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_IN_CHARGE: fieldBuilder.buildEdmTypeField(
          'PersonInCharge',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gracePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRACE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'GracePeriodDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxReporting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REPORTING: fieldBuilder.buildEnumField(
          'TaxReporting',
          HrmLoanItemTax,
          true
        ),
        /**
         * Static representation of the {@link loanDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAN_DAYS: fieldBuilder.buildEdmTypeField(
          'LoanDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link loanTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAN_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LoanTypeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LoanItems)
      };
    }

    return this._schema;
  }
}

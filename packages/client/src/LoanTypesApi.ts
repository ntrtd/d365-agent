/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LoanTypes } from './LoanTypes';
import { LoanTypesRequestBuilder } from './LoanTypesRequestBuilder';
import { LoanItemsApi } from './LoanItemsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class LoanTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LoanTypes<DeSerializersT>, DeSerializersT>
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
  ): LoanTypesApi<DeSerializersT> {
    return new LoanTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link loanItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAN_ITEM: OneToManyLink<
      LoanTypes<DeSerializersT>,
      DeSerializersT,
      LoanItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [LoanItemsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      LOAN_ITEM: new OneToManyLink('LoanItem', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = LoanTypes;

  requestBuilder(): LoanTypesRequestBuilder<DeSerializersT> {
    return new LoanTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LoanTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LoanTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LoanTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LoanTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LoanTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOAN_TYPE_ID: OrderableEdmTypeField<
      LoanTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GRACE_PERIOD_DAYS: OrderableEdmTypeField<
      LoanTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LoanTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link loanItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAN_ITEM: OneToManyLink<
      LoanTypes<DeSerializersT>,
      DeSerializersT,
      LoanItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LoanTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link loanTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAN_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LoanTypeId',
          'Edm.String',
          false
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
        ALL_FIELDS: new AllFields('*', LoanTypes)
      };
    }

    return this._schema;
  }
}

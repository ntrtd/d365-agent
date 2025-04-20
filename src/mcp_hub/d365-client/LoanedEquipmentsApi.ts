/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LoanedEquipments } from './LoanedEquipments';
import { LoanedEquipmentsRequestBuilder } from './LoanedEquipmentsRequestBuilder';
import { LoanItemsApi } from './LoanItemsApi';
import { PeopleApi } from './PeopleApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LoanedEquipmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LoanedEquipments<DeSerializersT>, DeSerializersT>
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
  ): LoanedEquipmentsApi<DeSerializersT> {
    return new LoanedEquipmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link loanItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAN_ITEM: OneToOneLink<
      LoanedEquipments<DeSerializersT>,
      DeSerializersT,
      LoanItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dirPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIR_PERSON: OneToOneLink<
      LoanedEquipments<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [LoanItemsApi<DeSerializersT>, PeopleApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LOAN_ITEM: new OneToOneLink('LoanItem', this, linkedApis[0]),
      DIR_PERSON: new OneToOneLink('DirPerson', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = LoanedEquipments;

  requestBuilder(): LoanedEquipmentsRequestBuilder<DeSerializersT> {
    return new LoanedEquipmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LoanedEquipments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LoanedEquipments<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LoanedEquipments<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LoanedEquipments, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LoanedEquipments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSON_ID: OrderableEdmTypeField<
      LoanedEquipments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOAN_ITEM_ID: OrderableEdmTypeField<
      LoanedEquipments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOANED: OrderableEdmTypeField<
      LoanedEquipments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTUAL_RETURN: OrderableEdmTypeField<
      LoanedEquipments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLANNED_RETURN: OrderableEdmTypeField<
      LoanedEquipments<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link loanItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOAN_ITEM: OneToOneLink<
      LoanedEquipments<DeSerializersT>,
      DeSerializersT,
      LoanItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dirPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIR_PERSON: OneToOneLink<
      LoanedEquipments<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LoanedEquipments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ID: fieldBuilder.buildEdmTypeField(
          'PersonId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link loaned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOANED: fieldBuilder.buildEdmTypeField(
          'Loaned',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link actualReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_RETURN: fieldBuilder.buildEdmTypeField(
          'ActualReturn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link plannedReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_RETURN: fieldBuilder.buildEdmTypeField(
          'PlannedReturn',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LoanedEquipments)
      };
    }

    return this._schema;
  }
}

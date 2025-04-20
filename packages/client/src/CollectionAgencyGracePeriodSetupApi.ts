/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CollectionAgencyGracePeriodSetup } from './CollectionAgencyGracePeriodSetup';
import { CollectionAgencyGracePeriodSetupRequestBuilder } from './CollectionAgencyGracePeriodSetupRequestBuilder';
import { TableGroupAll } from './TableGroupAll';
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
export class CollectionAgencyGracePeriodSetupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CollectionAgencyGracePeriodSetup<DeSerializersT>, DeSerializersT>
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
  ): CollectionAgencyGracePeriodSetupApi<DeSerializersT> {
    return new CollectionAgencyGracePeriodSetupApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CollectionAgencyGracePeriodSetup;

  requestBuilder(): CollectionAgencyGracePeriodSetupRequestBuilder<DeSerializersT> {
    return new CollectionAgencyGracePeriodSetupRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CollectionAgencyGracePeriodSetup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CollectionAgencyGracePeriodSetup<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CollectionAgencyGracePeriodSetup<DeSerializersT>,
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
    typeof CollectionAgencyGracePeriodSetup,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CollectionAgencyGracePeriodSetup,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_OR_GROUP_NUMBER: OrderableEdmTypeField<
      CollectionAgencyGracePeriodSetup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      CollectionAgencyGracePeriodSetup<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      CollectionAgencyGracePeriodSetup<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      CollectionAgencyGracePeriodSetup<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GRACE_PERIOD_IN_DAYS_AFTER_TRANSACTION_DATE: OrderableEdmTypeField<
      CollectionAgencyGracePeriodSetup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CollectionAgencyGracePeriodSetup<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accountOrGroupNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_OR_GROUP_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountOrGroupNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link gracePeriodInDaysAfterTransactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRACE_PERIOD_IN_DAYS_AFTER_TRANSACTION_DATE:
          fieldBuilder.buildEdmTypeField(
            'GracePeriodInDaysAfterTransactionDate',
            'Edm.Int32',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CollectionAgencyGracePeriodSetup)
      };
    }

    return this._schema;
  }
}
